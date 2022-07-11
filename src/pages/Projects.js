import { useState, useEffect } from "react";
//import { Link as RouterLink } from "react-router-dom";
import Link from "../components/Link";
import List from "../components/List";

function Projects({ userName }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const results = await data.json();

      if (results) {
        setProjects(results);
        setLoading(false);
      }
    }

    fetchData();
  }, [userName]);

  return (
    <div className="Project-container">
      <h2>Projects</h2>

      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List
            items={projects.map((project) => ({
              field: project.name,
              value: (
                <Link url={project.html_url}
                  title = {project.html_url}
                />
            //   value: (
            //     <RouterLink to={project.html_url}>
            //       {project.html_url}
            //     </RouterLink>
              ),
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
