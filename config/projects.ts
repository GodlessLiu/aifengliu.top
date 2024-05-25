export interface ProjectConfig {
    name: string
    description: string
    github: string
    image: string
    date: string
    stacks: Stack[]
}

interface Stack {
    name: string
    link: string
}

export const projectConfig: ProjectConfig[] = [
    {
        name: "个人博客",
        description: "My personal blog",
        github: "https://github.com/GodlessLiu/aifengliu.top",
        image: "",
        date: "2024",
        stacks: [
            {
                name: "Nuxt",
                link: "https://nuxt.com/"
            },
            {
                name: "TypeScript",
                link: "https://www.typescriptlang.org/"
            },
            {
                name: "TailwindCSS",
                link: "https://tailwindcss.com/"
            }
        ]
    },
    {
        name: "代码管理片段",
        description: "面向开发人员，为了实现创建、组织和共享代码片段的功能，并且不依赖于用户自己使用的IDE",
        github: "https://github.com/GodlessLiu/code-snippet",
        image: "",
        date: "2024",
        stacks: [{
            name: "React",
            link: "https://reactjs.org/"
        }, {
            name: "TypeScript",
            link: "https://www.typescriptlang.org/"
        }, {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/"
        }, {
            name: "shadcn/ui",
            link: "https://ui.shadcn.com/"
        },
        {
            name: "tauri",
            link: "https://tauri.app/"
        }
        ]
    },
    {
        name: "富文本编辑器",
        description: "用于react项目的富文本编辑器，基于 Tiptap",
        github: "https://github.com/GodlessLiu/tiptap-react/",
        image: "",
        date: "2023",
        stacks: [{
            name: "React",
            link: "https://reactjs.org/"
        }, {
            name: "TypeScript",
            link: "https://www.typescriptlang.org/"
        }, {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/"
        }, {
            name: "Tiptap",
            link: "https://www.tiptap.dev/"
        }]
    },
    {
        name: "react-2048",
        description: "2048 游戏的 React 实现",
        github: "https://github.com/GodlessLiu/react-2048",
        image: "",
        date: "2022",
        stacks: [{
            name: "React",
            link: "https://reactjs.org/"
        }, {
            name: "TypeScript",
            link: "https://www.typescriptlang.org/"
        }, {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/"
        }]
    },
    {
        name: "CV",
        description: "A simple cv template",
        github: "https://github.com/GodlessLiu/cv",
        image: "",
        date: "2023",
        stacks: [{
            name: "React",
            link: "https://reactjs.org/"
        }, {
            name: "TypeScript",
            link: "https://www.typescriptlang.org/"
        }, {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/"
        }, {
            name: "shadcn/ui",
            link: "https://ui.shadcn.com/"
        }
        ]
    }
]