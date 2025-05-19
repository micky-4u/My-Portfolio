import js from "../../public/images/js.png";
import python from "../../public/images/python.png";
import css from "../../public/images/css.png";
import html from "../../public/images/html.png";
import react from "../../public/images/react.png";
import dj from "../../public/images/dj.png";
import sql from "../../public/images/sql.png";
import pos from "../../public/images/pos.png";
import aws from "../../public/images/aws.png";
import git from "../../public/images/git.png";
import laravel from "../../public/images/laravel.png";

import { strictEqual } from "assert";

export const projectsData = [
    {
        "id": 8,
        "title": "Activity Tracking System",
        "type": "Web Development",
        "metadata": {
            "link": "https://github.com/micky-4u/Activity-Tracking-App",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools" : [laravel,react],
            "type": "Personal"
        }
    },
    {
        "id": 1,
        "title": "Learning Management System",
        "type": "Web Development",
        "metadata": {
            "link": "https://github.com/micky-4u/Prudent-Child-School",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools" : [python,dj,react,pos],
            "type": "Personal"
        }
    },
    {
        "id": 6,
        "title": "LightView Insurance App",
        "type": "Web Development",
        "metadata": {
            "link": "https://github.com/micky-4u/LightView-Insurance",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools": [python,dj],
            "type": "Team"
        }
    },
    {
        "id": 7,
        "title": "Enhancing Unsupervised Signature Verification through Advanced Feature Extraction Techniques",
        "type": "Machine Learning",
        "metadata": {
            "link": "https://www.researchsquare.com/article/rs-4249016/v1",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools" : [python],
            "type": "Personal"
        }
    },
    {
        "id": 2,
        "title": "Real Estate Website",
        "type": "Web Development",
        "metadata": {
            "link": "https://github.com/micky-4u/Real-Estate",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools": [html,css,js,react,sql],
            "type": "Personal"
        }
    },


    {
        "id": 3,
        "title": "Circa Website",
        "type": "Web Development",
        "metadata": {
            "link": "https://github.com/micky-4u/Circa-Website",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools": [js,react],
            "type": "Personal"
        }
    },
    {
        "id": 4,
        "title": "Prompt-Rocket Website",
        "type": "Web Development",
        "metadata": {
            "link": "https://github.com/micky-4u/Prompt-Rocket",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools": [js , react],
            "type": "Personal"
        }
    }
]

export const productionTools =[python,sql,pos,js,dj,aws,git,html,css,react,laravel]