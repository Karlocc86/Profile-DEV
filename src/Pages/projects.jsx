import {Link} from "react-router";




const Projects = () => {
    return (
        <div>
            <h1>These are my projects</h1>
            <p>
                <Link to={'/'}>Go Back</Link>
            </p>

            <h1>Experience</h1>

            <h2>HACKMTY 2025 | Project: "Virtual Angel" for Gategroup <span style={{fontSize: '0.7em' , marginRight: '10 px' , }}> Oct. 24 – Oct. 26, 2025</span></h2>

            <p style={{ fontStyle: 'italic' }}>Team Leader & Full Stack Developer</p>

            <p>• Led a 4-person team to develop a smart catering optimization system, integrating Python backend, Android frontend,
                        and Predictive AI <br/>
                        • Engineered a Python-based data processing module to serialize product logistics into JSON-embedded QR codes for
                        efficient tracking <br/>
                        • Developed a native Android application featuring a visual scanning interface (AR-style) that classified product status
                        (Discard/Priority/Good) using color-coded indicators <br/>
                        • Implemented an AI-driven predictive module using LLMs and statistical modeling to calculate optimal inventory
                        loads based on flight variables
</p>

            <h2>Hackathon BR41N.io Spring School 2025 <span style={{fontSize: '0.7em' , marginRight: '10 px' , }}> May. 03 – May. 05, 2025</span></h2>

            <p style={{ fontStyle: 'italic' }}>Participant</p>

            <p>• Collaborated in an international team to prototype a Brain-Computer Interface (BCI) application in under 48 hours <br />
                    • Integrated HERE Technologies APIs with EEG brain signal processing to create a geospatial accessibility solution <br />
                    • Presented the working demo to industry judges, emphasizing technical feasibility and social impact
            </p>

            <h1>Projects</h1>

            <h2>Smart IoT Environmental Monitor with GenAI <span style={{ fontSize: '0.7em' ,fontStyle: 'italic' , marginLeft: '10px' }}>Raspberry Pi 5, Python, Kotlin, Gemini API</span></h2>

            <p>• Directed the development of a real-time environmental monitoring ecosystem, integrating hardware sensors with a
                    cloud-connected mobile app <br />
                    • Engineered a Python-based data acquisition system on Raspberry Pi 5 to capture high-frequency telemetry from
                    temperature, humidity, and light sensors <br />
                    • Developed a native Android application (Kotlin/Java) that processes and visualizes sensor data retrieved from a cloud
                    database <br />
                    • Integrated Gemini 2.5 Flash API to provide AI-driven insights and natural language summaries of environmental
                    conditions
            </p>


            <h2>High-Performance Network Log Analysis System<span style={{ fontSize: '0.7em' ,fontStyle: 'italic' , marginLeft: '10px' }}>C++ (STL, Pointers, Memory Management)</span></h2>

            <p>• Architected a comprehensive system to process massive server logs, implementing Hash Tables with chaining to
                    achieve O(1) average time complexity for IP lookups and collision handling <br />
                    • Developed a Binary Search Tree (BST) module to efficiently identify and rank high-frequency IP addresses,
                    detecting potential DDoS anomalies <br />
                    • Implemented custom Linked Lists and Merge Sort algorithms to handle dynamic memory allocation and sorting of
                    large datasets without contiguous memory constraints <br />
                    • Designed Graph algorithms (BFS & DFS) using Adjacency Matrices to simulate and traverse network node
                    connections
            </p>

            <h2>EEG Signal Processing with Unicorn Hybrid Black<span style={{ fontSize: '0.7em' ,fontStyle: 'italic' , marginLeft: '10px' }}>Python, LSL, Pandas, SciPy</span></h2>

            <p>• Developed a data pipeline for EEG signals using the Unicorn Hybrid Black headset via Lab Streaming Layer (LSL) <br />
                    • Implemented digital signal processing to clean raw EEG data and compute power spectral density (PSD) in real-time <br />
                    • Extracted brainwave bands (delta, theta, alpha, beta, gamma) and designed a concentration index for cognitive
                    monitoring
            </p>





        </div>
    )
}

export default Projects;

