document.addEventListener('DOMContentLoaded', () => {
    // === 1. Navbar Scroll Effect ===
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // === 2. Mobile Menu Toggle ===
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-navigation');
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // === 3. Live Horizontal CI/CD Pipeline Visualizer ===
    const nodes = {
        commit: document.getElementById('node-commit'),
        build: document.getElementById('node-build'),
        test: document.getElementById('node-test'),
        deploy: document.getElementById('node-deploy')
    };
    const connectors = {
        conn1: document.getElementById('conn-1'),
        conn2: document.getElementById('conn-2'),
        conn3: document.getElementById('conn-3')
    };
    const pipeStatusText = document.getElementById('pipe-status-text');

    function runPipeline() {
        // Reset all nodes
        Object.values(nodes).forEach(n => n.className = 'pipeline-node');
        Object.values(connectors).forEach(c => c.className = 'pipeline-connector-horizontal');
        
        // Step 1: Code Commit
        pipeStatusText.textContent = "Checking code updates...";
        pipeStatusText.className = "status-text running";
        nodes.commit.classList.add('active');

        setTimeout(() => {
            // Step 2: Triggering Build
            pipeStatusText.textContent = "Building Docker artifacts...";
            connectors.conn1.classList.add('active');
            nodes.commit.classList.add('success');
            nodes.commit.classList.remove('active');
            
            setTimeout(() => {
                nodes.build.classList.add('active');
                
                setTimeout(() => {
                    // Step 3: Running Tests
                    pipeStatusText.textContent = "Running K8s checks...";
                    connectors.conn2.classList.add('active');
                    nodes.build.classList.add('success');
                    nodes.build.classList.remove('active');
                    
                    setTimeout(() => {
                        nodes.test.classList.add('active');
                        
                        setTimeout(() => {
                            // Step 4: Terraform deployment
                            pipeStatusText.textContent = "Applying Terraform plans...";
                            connectors.conn3.classList.add('active');
                            nodes.test.classList.add('success');
                            nodes.test.classList.remove('active');
                            
                            setTimeout(() => {
                                nodes.deploy.classList.add('active');
                                
                                setTimeout(() => {
                                    nodes.deploy.classList.add('success');
                                    nodes.deploy.classList.remove('active');
                                    pipeStatusText.textContent = "AWS Deploy Complete!";
                                    pipeStatusText.className = "status-text success";
                                    
                                    // Restart pipeline after 8 seconds of idle
                                    setTimeout(runPipeline, 8000);
                                }, 2000);
                            }, 1000);
                        }, 2500);
                    }, 1000);
                }, 2000);
            }, 1000);
        }, 2000);
    }

    runPipeline();

    // === 4. Interactive DevOps Terminal Console ===
    const termBody = document.getElementById('terminal-output');
    const termInput = document.getElementById('terminal-command-input');
    const termContainer = document.getElementById('terminal-container');

    termContainer.addEventListener('click', () => {
        termInput.focus();
    });

    const commandHistory = [];
    let historyIdx = -1;

    const resumeData = {
        about: "HEMA SAI SIDDULA - AWS DevOps & Cloud Engineer\nOverall Experience: 5.3+ Years\nCloud & DevOps Specialist. Focused on infrastructure automation, high-availability, and continuous deployment pipelines.",
        skills: "Cloud platforms:\n - AWS (EC2, S3, IAM, VPC, ELB, Auto Scaling, CloudWatch)\n - Azure Cloud\n\nDevOps & CI/CD:\n - Docker, Kubernetes (EKS/ECS), Terraform\n - GitHub Actions, YAML Pipelines, Git/GitHub\n - Helm Charts, Ansible\n\nSystems & Scripting:\n - Linux, Bash & Python (Boto3)\n - Nginx, Apache, MySQL",
        experience: "Axiora Global Solutions (April 2025 - Present)\nAWS DevOps Engineer\n - Provisioned resources via Terraform, achieving 100% reproducible environments\n - Designed CI/CD release cycles with GitHub Actions, boosting release speed by 60%\n - Containerized workloads in Docker/K8s, scaling efficiency up by 30%\n - Optimized cloud usage, reducing monthly spend by 22% ($1,500+ saved)",
        projects: "1. Axiora Prism - CRM Platform (Terraform, GitHub Actions, AWS EC2/RDS)\n   -> Reduced env setup times from days to minutes; cut downtime by 30%\n2. Axiora Pulse - AI Platform (ECS Fargate, IAM, APIs)\n   -> Achieved 99.9% deployment success rates; cut API latency by 25%\n3. RAPTOR CRM - PHP migration (EC2, Nginx, MySQL, Auto Backups)\n   -> Supported 5,000+ users; ensured RPO < 1 hour; cut downtime by 45%",
        contact: "Email: hemasai0563@gmail.com\nPhone: +91 8790463245\nLocation: Hyderabad, India"
    };

    termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmdText = termInput.value.trim().toLowerCase();
            termInput.value = '';

            if (cmdText) {
                commandHistory.push(cmdText);
                historyIdx = commandHistory.length;
                
                // Echo command
                appendTerminalLine(`visitor@hemasai-devops:~$ ${cmdText}`, 'terminal-line highlight-line');
                executeTerminalCommand(cmdText);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIdx > 0) {
                historyIdx--;
                termInput.value = commandHistory[historyIdx];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIdx < commandHistory.length - 1) {
                historyIdx++;
                termInput.value = commandHistory[historyIdx];
            } else {
                historyIdx = commandHistory.length;
                termInput.value = '';
            }
        }
    });

    function appendTerminalLine(text, className = 'terminal-line system-line') {
        const line = document.createElement('p');
        line.className = className;
        line.innerHTML = text.replace(/\n/g, '<br>');
        termBody.appendChild(line);
        termBody.scrollTop = termBody.scrollHeight;
    }

    function executeTerminalCommand(cmd) {
        switch (cmd) {
            case 'help':
                appendTerminalLine("Available commands:\n - <span class='highlight-line'>about</span>      : Display professional summary\n - <span class='highlight-line'>skills</span>     : View technical skills stack\n - <span class='highlight-line'>experience</span> : Show work history details\n - <span class='highlight-line'>projects</span>   : List major projects\n - <span class='highlight-line'>contact</span>    : Print contact options\n - <span class='highlight-line'>github</span>     : Open GitHub profile in new tab\n - <span class='highlight-line'>clear</span>      : Clear the console logs", 'terminal-line system-line');
                break;
            case 'about':
                appendTerminalLine(resumeData.about, 'terminal-line system-line');
                break;
            case 'skills':
                appendTerminalLine(resumeData.skills, 'terminal-line system-line');
                break;
            case 'experience':
                appendTerminalLine(resumeData.experience, 'terminal-line system-line');
                break;
            case 'projects':
                appendTerminalLine(resumeData.projects, 'terminal-line system-line');
                break;
            case 'contact':
                appendTerminalLine(resumeData.contact, 'terminal-line system-line');
                break;
            case 'github':
                appendTerminalLine("Opening GitHub profile...", 'terminal-line success-line');
                window.open('https://github.com/hemasai0563-tech', '_blank');
                break;
            case 'clear':
                termBody.innerHTML = '';
                break;
            default:
                appendTerminalLine(`Command not found: ${cmd}. Type 'help' for options.`, 'terminal-line warning-line');
        }
    }
});
