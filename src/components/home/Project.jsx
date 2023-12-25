import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?type=all`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    try {
      // Getting all repos
      const response = await axios.get(allReposAPI);
      // Sorting repos by last update time in descending order
      const sortedRepos = response.data.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
      // Taking the top 'length' repos
      const generalRepos = sortedRepos.slice(0, length);

      // Adding specified repos
      const specifiedRepos = await Promise.all(specfic.map(async (repoName) => {
        const response = await axios.get(`${specficReposAPI}/${repoName}`);
        return response.data;
      }));

      // Combining general and specified repos and removing duplicates
      const repoList = [...generalRepos, ...specifiedRepos.filter(repo => !generalRepos.some(generalRepo => generalRepo.name === repo.name))];

      // Setting projectArray
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
