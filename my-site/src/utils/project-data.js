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
import { strictEqual } from "assert";

export const projectsData = [
    {
        "id": 1,
        "title": "Learning Management System",
        "metadata": {
            "link": "https://www.example.com",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools" : [python,dj,react,pos],
            "type": "Personal"
        }
    },
    {
        "id": 6,
        "title": "LightView Insurance App",
        "metadata": {
            "link": "https://www.example.com",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools": [python,dj],
            "type": "Team"
        }
    },
    {
        "id": 2,
        "title": "Real Estate Website",
        "metadata": {
            "link": "https://www.example.com",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools": [html,css,js,react,sql],
            "type": "Personal"
        }
    },


    {
        "id": 3,
        "title": "Circa Website",
        "metadata": {
            "link": "https://www.example.com",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools": [js,react],
            "type": "Personal"
        }
    },
    {
        "id": 4,
        "title": "Prompt-Rocket Website",
        "metadata": {
            "link": "https://www.example.com",
            "description": "This is a project about something",
            "imagePaths": [],
            "tools": [js , react],
            "type": "Personal"
        }
    }
]

export const productionTools =[python,sql,pos,js,dj,aws,git,html,css]