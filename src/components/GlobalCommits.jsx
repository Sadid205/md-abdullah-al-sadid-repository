import { useEffect, useState } from "react";
import { FaCircle, FaCodeBranch, FaExternalLinkAlt, FaTerminal } from "react-icons/fa";

const GlobalCommits = ({ username = "Sadid205" }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // GitHub API Call
    fetch(`https://api.github.com/users/${username}/events/public`)
      .then((res) => {
        if (res.status === 403) throw new Error("API rate limit exceeded. Try later.");
        if (!res.ok) throw new Error("Could not fetch data");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          // Filtering only PushEvents
          const pushEvents = data.filter(event => event.type === "PushEvent").slice(0, 5);
          setActivities(pushEvents);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  const s = {
    kw: { color: "#ff7b72" },
    fn: { color: "#d2a8ff" },
    st: { color: "#a5d6ff" },
    cm: { color: "#8b949e" },
    accent: { color: "#DB9F75" }
  };

  if (loading) return <div className="p-5 font-mono text-sm text-gray-500">Initializing git logs...</div>;
  if (error) return <div className="p-5 font-mono text-sm text-red-400">Status 404: {error}</div>;
  if (activities.length === 0) return <div className="p-5 font-mono text-sm text-gray-500">No recent public commits found.</div>;

  return (
    <div className="py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#e8ddd0] uppercase tracking-widest font-serif">
          Live Git Logs
        </h2>
        <div className="w-12 h-0.5 bg-[#DB9F75] mt-2" />
      </div>

      <div className="bg-[#0d1117] rounded-xl border border-[#30363d] overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-5 py-3 border-bottom border-[#30363d] flex justify-between items-center border-b">
          <div className="flex items-center gap-2">
            <FaTerminal className="text-[#DB9F75] text-sm" />
            <span className="text-[#e6edf3] text-xs">user@sadid:~/activity_stream</span>
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3].map(i => <FaCircle key={i} className="text-[8px] text-[#30363d]" />)}
          </div>
        </div>

        <div className="divide-y divide-[#21262d]">
          {activities.map((item, index) => {
            // Safe URL generation
            const repoUrl = `https://github.com/${item.repo.name}`;
            const latestCommitSha = item.payload.commits?.[0]?.sha;
            const commitUrl = latestCommitSha ? `${repoUrl}/commit/${latestCommitSha}` : repoUrl;

            return (
              <div key={index} className="p-5 hover:bg-[#161b22] transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <a 
                    href={repoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#d2a8ff] hover:underline text-sm font-semibold flex items-center gap-2"
                  >
                    <FaCodeBranch size={12} />
                    {item.repo.name.split("/")[1]}
                  </a>
                  <span className="text-[#8b949e] text-[10px]">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                </div>

                <div className="bg-[#010409] p-3 rounded-md border border-[#21262d] mb-3">
                  {item.payload.commits?.map((commit, i) => (
                    <div key={i} className="text-xs mb-1.5 last:mb-0 flex justify-between">
                      <span className="text-[#a5d6ff]">
                        <span className="text-[#e6edf3] mr-2">$</span>
                        {commit.message}
                      </span>
                      <span className="text-[#8b949e] hidden sm:inline">
                        [{commit.sha.substring(0, 7)}]
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <a 
                    href={commitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#58a6ff] hover:text-white text-[10px] flex items-center gap-1.5 transition-colors uppercase font-bold"
                  >
                    verify_on_github <FaExternalLinkAlt size={9} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GlobalCommits;