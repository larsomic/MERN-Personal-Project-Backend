import Project from '../models/projects.js'

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        console.log(projects);
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createProject = async (req, res) => {
    const project = req.body;

    const newProject = new Project(project);
    try {
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}