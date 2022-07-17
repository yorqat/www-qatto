import React, { useEffect } from 'react'
import mongoose, { connect } from 'mongoose';


const uri = "mongodb+srv://mongo:P%40ssw0rd@www-qatto.ix19o.mongodb.net/?retryWrites=true&w=majority";

const Projects: React.FC = () => {
    // useEffect(() => {
    //     getProjects();
    // });

    // const getProjects = async () => {
    //     console.log("gonna connect to db bruh")
    //     await connect(uri);

    //     const Schema = mongoose.Schema;

    //     const BlogPost = mongoose.model('Project', new Schema({
    //       repository: String,
    //       project_name: String,
    //       description: String,
    //       art: String,
    //     }));

    //     console.log(BlogPost.find({}));
    // }
    const getRepos = fetch('/store/projects');


    const repos = [
        { 
            repository: "https://github.com/Qark-dev/Dotfiles",
            project_name: "workstation",
            description: "Dotfiles for my current workstation setup",
            art: "https://cdn.discordapp.com/attachments/828947489267777570/997523470411903069/dot.png",
            id: 0,
        },
        {
            repository: "https://github.com/Madoshakalaka/max-the-wait-gain",
            project_name: "max the wait gain",
            description: "It's a fight to not eat as much",
            art: "https://cdn.discordapp.com/attachments/828947489267777570/997525761844064296/max-the-wait-gain.png",
            id: 1
        },
        {
            repository: "",
            project_name: "triplicata",
            description: "Discord bot for playing games over the api",
            art: "https://cdn.discordapp.com/attachments/828947489267777570/997522311752204360/triplicata.png",
            id: 2
        }
    ];

    const listItems = repos.map((r) =>
        <article className='project' key={r.id}>
            <a href={ r.repository }><img src={ r.art }></img></a>
            <h3><a href={ r.repository }>{ r.project_name }
                {/* <a href={r.repository} target='_blank' rel='noreferrer'>
                    <img className='new-tab' src="https://cdn.discordapp.com/attachments/273539705595756544/998088503999082506/unknown.png" alt="open in new tab" />
                </a> */}
            </a></h3>
            <p>{ r.description }</p>
        </article>
    );

    return (
        <section className='projects'>
            <h2 className='projects__title'>Passions and Projects </h2>
            <ul className='projects__list'>
                { listItems }
            </ul>
        </section>
    )
}

export default Projects
