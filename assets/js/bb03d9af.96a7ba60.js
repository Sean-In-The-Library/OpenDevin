"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9832],{8820:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=l(4848),t=l(8453);const s={},a="Local LLM with Ollama",r={id:"usage/llms/localLLMs",title:"Local LLM with Ollama",description:"Ensure that you have the Ollama server up and running.",source:"@site/docs/usage/llms/localLLMs.md",sourceDirName:"usage/llms",slug:"/usage/llms/localLLMs",permalink:"/OpenDevin/docs/usage/llms/localLLMs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Google Gemini/Vertex LLM",permalink:"/OpenDevin/docs/usage/llms/googleLLMs"},next:{title:"\ud83e\udde0 Agents and Capabilities",permalink:"/OpenDevin/docs/usage/agents"}},i={},c=[{value:"Pull Models",id:"pull-models",level:2},{value:"Start OpenDevin",id:"start-opendevin",level:2},{value:"Docker",id:"docker",level:3},{value:"Build from Source",id:"build-from-source",level:3},{value:"Select your Model",id:"select-your-model",level:2},{value:"Configuring the ollama service (WSL)",id:"configuring-the-ollama-service-wsl",level:2},{value:"Fixing it",id:"fixing-it",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"local-llm-with-ollama",children:"Local LLM with Ollama"}),"\n",(0,o.jsxs)(n.p,{children:["Ensure that you have the Ollama server up and running.\nFor detailed startup instructions, refer to the ",(0,o.jsx)(n.a,{href:"https://github.com/ollama/ollama",children:"here"})]}),"\n",(0,o.jsxs)(n.p,{children:["This guide assumes you've started ollama with ",(0,o.jsx)(n.code,{children:"ollama serve"}),". If you're running ollama differently (e.g. inside docker), the instructions might need to be modified. Please note that if you're running wsl the default ollama configuration blocks requests from docker containers. See ",(0,o.jsx)(n.a,{href:"#4-configuring-the-ollama-service-wsl",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"pull-models",children:"Pull Models"}),"\n",(0,o.jsxs)(n.p,{children:["Ollama model names can be found ",(0,o.jsx)(n.a,{href:"https://ollama.com/library",children:"here"}),". For a small example, you can use\nthe ",(0,o.jsx)(n.code,{children:"codellama:7b"})," model. Bigger models will generally perform better."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ollama pull codellama:7b\n"})}),"\n",(0,o.jsx)(n.p,{children:"you can check which models you have downloaded like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"~$ ollama list\nNAME                            ID              SIZE    MODIFIED\ncodellama:7b                    8fdf8f752f6e    3.8 GB  6 weeks ago\nmistral:7b-instruct-v0.2-q4_K_M eb14864c7427    4.4 GB  2 weeks ago\nstarcoder2:latest               f67ae0f64584    1.7 GB  19 hours ago\n"})}),"\n",(0,o.jsx)(n.h2,{id:"start-opendevin",children:"Start OpenDevin"}),"\n",(0,o.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,o.jsxs)(n.p,{children:["Use the instructions ",(0,o.jsx)(n.a,{href:"../intro",children:"here"})," to start OpenDevin using Docker.\nBut when running ",(0,o.jsx)(n.code,{children:"docker run"}),", you'll need to add a few more arguments:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'--add-host host.docker.internal=host-gateway \\\n-e LLM_API_KEY="ollama" \\\n-e LLM_BASE_URL="http://host.docker.internal:11434" \\\n'})}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# The directory you want OpenDevin to modify. MUST be an absolute path!\nexport WORKSPACE_BASE=$(pwd)/workspace\n\ndocker run \\\n    --add-host host.docker.internal=host-gateway \\\n    -e LLM_API_KEY="ollama" \\\n    -e LLM_BASE_URL="http://host.docker.internal:11434" \\\n    -e WORKSPACE_MOUNT_PATH=$WORKSPACE_BASE \\\n    -v $WORKSPACE_BASE:/opt/workspace_base \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    -p 3000:3000 \\\n    ghcr.io/opendevin/opendevin:main\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You should now be able to connect to ",(0,o.jsx)(n.code,{children:"http://localhost:3000/"})]}),"\n",(0,o.jsx)(n.h3,{id:"build-from-source",children:"Build from Source"}),"\n",(0,o.jsxs)(n.p,{children:["Use the instructions in ",(0,o.jsx)(n.a,{href:"https://github.com/OpenDevin/OpenDevin/blob/main/Development.md",children:"Development.md"})," to build OpenDevin.\nMake sure ",(0,o.jsx)(n.code,{children:"config.toml"})," is there by running ",(0,o.jsx)(n.code,{children:"make setup-config"})," which will create one for you. In ",(0,o.jsx)(n.code,{children:"config.toml"}),", enter the followings:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'LLM_MODEL="ollama/codellama:7b"\nLLM_API_KEY="ollama"\nLLM_EMBEDDING_MODEL="local"\nLLM_BASE_URL="http://localhost:11434"\nWORKSPACE_BASE="./workspace"\nWORKSPACE_DIR="$(pwd)/workspace"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"LLM_MODEL"})," of your choice if you need to."]}),"\n",(0,o.jsxs)(n.p,{children:["Done! Now you can start Devin by: ",(0,o.jsx)(n.code,{children:"make run"})," without Docker. You now should be able to connect to ",(0,o.jsx)(n.code,{children:"http://localhost:3000/"})]}),"\n",(0,o.jsx)(n.h2,{id:"select-your-model",children:"Select your Model"}),"\n",(0,o.jsxs)(n.p,{children:["In the OpenDevin UI, click on the Settings wheel in the bottom-left corner.\nThen in the ",(0,o.jsx)(n.code,{children:"Model"})," input, enter ",(0,o.jsx)(n.code,{children:"ollama/codellama:7b"}),", or the name of the model you pulled earlier.\nIf it doesn\u2019t show up in a dropdown, that\u2019s fine, just type it in. Click Save when you\u2019re done."]}),"\n",(0,o.jsx)(n.p,{children:"And now you're ready to go!"}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-ollama-service-wsl",children:"Configuring the ollama service (WSL)"}),"\n",(0,o.jsx)(n.p,{children:"The default configuration for ollama in wsl only serves localhost. This means you can't reach it from a docker container. eg. it wont work with OpenDevin. First let's test that ollama is running correctly."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'ollama list # get list of installed models\ncurl http://localhost:11434/api/generate -d \'{"model":"[NAME]","prompt":"hi"}\'\n#ex. curl http://localhost:11434/api/generate -d \'{"model":"codellama:7b","prompt":"hi"}\'\n#ex. curl http://localhost:11434/api/generate -d \'{"model":"codellama","prompt":"hi"}\' #the tag is optional if there is only one\n'})}),"\n",(0,o.jsx)(n.p,{children:'Once that is done test that it allows "outside" requests, like those from inside a docker container.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'docker ps # get list of running docker containers, for most accurate test choose the open devin sandbox container.\ndocker exec [CONTAINER ID] curl http://host.docker.internal:11434/api/generate -d \'{"model":"[NAME]","prompt":"hi"}\'\n#ex. docker exec cd9cc82f7a11 curl http://host.docker.internal:11434/api/generate -d \'{"model":"codellama","prompt":"hi"}\'\n'})}),"\n",(0,o.jsx)(n.h2,{id:"fixing-it",children:"Fixing it"}),"\n",(0,o.jsx)(n.p,{children:"Now let's make it work, edit /etc/systemd/system/ollama.service with sudo priviledges. (Path may vary depending on linux flavor)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo vi /etc/systemd/system/ollama.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/ollama.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"In the [Service] bracket add these lines"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'Environment="OLLAMA_HOST=0.0.0.0:11434"\nEnvironment="OLLAMA_ORIGINS=*"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Then save, reload the configuration and restart the service."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\nsudo systemctl restart ollama\n"})}),"\n",(0,o.jsx)(n.p,{children:"Finally test that ollama is accessible from within the container"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'ollama list # get list of installed models\ndocker ps # get list of running docker containers, for most accurate test choose the open devin sandbox container.\ndocker exec [CONTAINER ID] curl http://host.docker.internal:11434/api/generate -d \'{"model":"[NAME]","prompt":"hi"}\'\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>r});var o=l(6540);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);