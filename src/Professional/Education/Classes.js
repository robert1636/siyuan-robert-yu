import React, { Component, Fragment, Grid, flex } from "react";
import Quarter from "./Quarter";
import Course from "./Class";

class Classes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { courseColors } = this.props;
    return (
      <div style={{ marginBottom: 50 }}>
        <div>
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            UC San Diego
          </h2>
        </div>
        <Quarter quarter="Fall Qtr 2019"></Quarter>
        <Course
          id="57"
          courseNumber="CSE 202"
          courseName="Algorithm Design and Analysis"
          courseLink="http://algorithms.eng.ucsd.edu/cse202"
          courseDescription="Introduction to problems and algorithms
          Mathematics for algorithm analysis
          Divide and conquer
          Sorting and order statistics
          Fast Fourier transform
          Closest pair
          Greedy method
          Dynamic programming
          Graph algorithms
          Network Flow
          Linear programming
          NP-completeness
          PSPACE-complete problems
          Dealing with NP-hardness
          Exploiting input structure
          Approximation algorithms"
          courseColor={courseColors[56]}
        ></Course>
        <Course
          id="58"
          courseNumber="CSE 250A"
          courseName="Probabilistic Reason&Learning"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/math2417"
          courseDescription="inference and learning in directed probabilistic graphical models; prediction and planning in Markov decision processes; applications to computer vision, robotics, speech recognition, natural language processing, and information retrieval."
          courseColor={courseColors[57]}
        ></Course>
        <Course
          id="59"
          courseNumber="CSE 258"
          courseName="Recommender Sys&Web Mining"
          courseLink="http://cseweb.ucsd.edu/classes/fa19/cse258-a/"
          courseDescription="Supervised Learning: Regression; Supervised Learning: Classification; Dimensionality Reduction and Clustering; Recommender Systems; Text Mining; "
          courseColor={courseColors[58]}
        ></Course>
        <Quarter quarter="Winter Qtr 2020"></Quarter>
        <Course
          id="60"
          courseNumber="CSE 231"
          courseName="Advanced Compiler Design"
          courseLink="https://ucsd-pl.github.io/cse231/wi20/index.html"
          courseDescription="LLVM: optimizing compilers, just-in-time compilers, program verifiers, bug fingers, code refactoring tools, garbage collectors, and runtime monitoring systems."
          courseColor={courseColors[59]}
        ></Course>
        <Course
          id="61"
          courseNumber="CSE 232B"
          courseName="Database System Implementation"
          courseLink="https://cseweb.ucsd.edu/classes/wi20/cse232B-a/"
          courseDescription="ANTLER4; Java; XPath; XQuery: the construction of an XQuery processor. We consider a subset/modification of XML’s data model, XQuery, and XQuery’s type system as described in this note. The processor receives an XQuery, parses it into an abstract tree representation, optimizes it and finally executes the optimized plan."
          courseColor={courseColors[60]}
        ></Course>
        <Course
          id="62"
          courseNumber="CSE 260"
          courseName="Parallel Computation"
          courseLink="https://sites.google.com/eng.ucsd.edu/cse260-winter-2020/"
          courseDescription="OpenMP; MPI; Cuda; GPU; look at how programming for parallel processors is different than programming from their scalar predecessors, learn how to program in these different environments, how to think parallel, how to measure performance and efficiency of parallel programs. gain insights into what limits parallel computation."
          courseColor={courseColors[61]}
        ></Course>
        <Quarter quarter="Spring Qtr 2020"></Quarter>
        <Course
          id="63"
          courseNumber="CSE	227"
          courseName="Computer Security"
          courseLink="https://cseweb.ucsd.edu/~dstefan/cse227-spring20/#schedule1_2020-3-30"
          courseDescription="computer and network security, exploring a range of topics: Low-level vulnerabilities and exploits, Static analysis, Symbolic execution, Fuzzing, Control flow integrity, Software fault isolation, Sandboxing, Capability-based security, Verification, WebAssembly, JavaScript JIT attacks, JavaScript JIT defenses, Crypto attacks, High-assurance crypto, Transient-execution attacks"
          courseColor={courseColors[62]}
        ></Course>
        <Course
          id="64"
          courseNumber="CSE	291"
          courseName="Unsupervised Learning"
          courseLink="https://canvas.ucsd.edu/courses/12855"
          courseDescription="Nearest neighbor methods, Clustering, Informative projections, Probabilistic models I, Embeddings, dictionaries, and spatial partitions, Probabilistic models II, More neural models"
          courseColor={courseColors[63]}
        ></Course>
        <Course
          id="65"
          courseNumber="CSE	291"
          courseName="Advanced Statistical NLP"
          courseLink="https://canvas.ucsd.edu/courses/12852"
          courseDescription="Kneser-Ney trigram; VAE; PCFG Parser"
          courseColor={courseColors[64]}
        ></Course>
        <div>
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>UT Dallas</h2>
        </div>
        <Quarter quarter="2014 Fall"></Quarter>
        <Course
          id="1"
          courseNumber="AHST 1304"
          courseName="SURV WEST AHST:RENAISSNCE-MODR"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/ahst1304"
          courseDescription="Survey of Western Art History: Renaissance to Modern (3 semester credit hours) An introduction to painting, sculpture, and architecture in the West from the Renaissance to the modern period, including work by such artists as Michelangelo, Rembrandt, the Impressionists, and Picasso. Artists and monuments will be studied within their historical, religious, and social contexts, with particular focus on the role of art in society and on the development of style. (3-0) Y"
          courseColor={courseColors[0]}
        ></Course>
        <Course
          id="2"
          courseNumber="CS 1336"
          courseName="PROGRAMMING FUNDAMENTALS"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/cs1336"
          courseDescription="C++ concepts"
          courseColor={courseColors[1]}
        ></Course>
        <Course
          id="3"
          courseNumber="CS 1136"
          courseName="COMPUTER SCIENCE LABORATORY"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/cs1336"
          courseDescription="C++ lab"
          courseColor={courseColors[2]}
        ></Course>
        <Course
          id="4"
          courseNumber="ECS 1200"
          courseName="INTRO TO ENGR & COMPUTER SCI"
          courseLink="https://personal.utdallas.edu/~dodge/ECS1200/index.htm"
          courseDescription="Introduction to the engineering and computing professions, professional ethics. Overview of ECS curricula, connections among ECS fields and to the sciences, and other fields. Basic study, problem solving and other skills needed to succeed as an ECS major. Engineering design and quantitative methods. Multi-disciplinary team projects designed to replicate decision processes in real-world situations."
          courseColor={courseColors[3]}
        ></Course>
        <Course
          id="5"
          courseNumber="HIST1301"
          courseName="US HIST SURVEY TO CIVIL WAR"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/hist1301"
          courseDescription="U.S. History Survey to Civil War. An introduction to the methods of historical inquiry focusing on the study of American history from the beginnings through the American Civil War. (3-0) R"
          courseColor={courseColors[4]}
        ></Course>
        <Course
          id="6"
          courseNumber="MATH 2417"
          courseName="CALCULUS I"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/math2417"
          courseDescription="Calculus I. Functions, limits, continuity, differentiation; integration of function of one variable; logarithmic, exponential, and inverse trigonometric functions; techniques of integration, and applications. Three lecture hours and two discussion hours a week; problem section required with MATH 2417, and will also be registered for exam section. Not all MATH/STAT courses may be counted toward various degree plans. Please consult your degree plan to determine the appropriate MATH/STAT course requirements. Prerequisite: ALEKS score required or a grade of at least a C- in MATH 2306 or MATH 2312. (3-2) S"
          courseColor={courseColors[5]}
        ></Course>
        <Quarter quarter="2015 Spring"></Quarter>
        <Course
          id="7"
          courseNumber="CE 1202"
          courseName="INTRO TO ELECTRICL ENGINEERING"
          courseLink="https://catalog.utdallas.edu/2012/undergraduate/courses/ce1202"
          courseDescription="Learning the use of common laboratory electronic equipment; understanding the assembly of electronic circuits; and making various measurements. Students also learn how to work together with a partner and how to write a laboratory report. The lecture introduces general engineering practices, engineering research at UTD, engineering activities at selected local companies, and concepts such as innovation and invention. The course also includes lectures and projects on communication, understanding the importance of lifelong learning, ethics, and a knowledge of contemporary issues."
          courseColor={courseColors[6]}
        ></Course>
        <Course
          id="8"
          courseNumber="CE 1337"
          courseName="COMPUTER SCIENCE I"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/ce1337"
          courseDescription="control structures, structured data types, object-oriented programming, basic analysis of algorithms, searching and sorting techniques, and an introduction to software engineering. Programming language of choice is C/C++."
          courseColor={courseColors[7]}
        ></Course>
        <Course
          id="9"
          courseNumber="CE 2310"
          courseName="INTRODUCTION TO DIGITAL SYSTEM"
          courseLink="https://catalog.utdallas.edu/2012/undergraduate/courses/ce2310"
          courseDescription="digital circuits, hardware structures, and assembly-language concepts, Internal data representation and arithmetic operations in a computer, basic logic circuits, MIPS assembly language and an overview of computer architecture."
          courseColor={courseColors[8]}
        ></Course>
        <Course
          id="10"
          courseNumber="MATH 2419"
          courseName="CALCULUS II"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/math2419"
          courseDescription="Improper integrals, sequences, infinite series, power series, parametric equations and polar coordinates, vectors, vector valued functions, functions of several variables, partial derivatives and applications, and multiple integration."
          courseColor={courseColors[9]}
        ></Course>
        <Course
          id="11"
          courseNumber="PHYS 2125"
          courseName="PHYSICS LABORATORY I"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/phys2125"
          courseDescription="Experiments investigate basic measurements and statistics including error, mean, standard deviation and error propagation; one dimensional and two dimensional motion; Newton's laws; conservation laws of energy and momentum; rotational motion; and oscillations."
          courseColor={courseColors[10]}
        ></Course>
        <Course
          id="12"
          courseNumber="PHYS 2325"
          courseName="MECHANICS"
          courseLink="https://catalog.utdallas.edu/2012/undergraduate/courses/phys2325"
          courseDescription="Basic physics including a study of space and time, kinematics, forces, energy and momentum, conservation laws, rotational motion, torques, and harmonic oscillation. Two lectures per week."
          courseColor={courseColors[11]}
        ></Course>
        <Quarter quarter="2015 Summer"></Quarter>
        <Course
          id="13"
          courseNumber="CS 2305"
          courseName="DISCRETE MATH FOR COMPUTING I"
          courseLink="https://catalog.utdallas.edu/2012/undergraduate/courses/cs2305"
          courseDescription="Principles of counting. Logic and proof methods, including induction. Basic recurrence relations. Basics of algorithm complexity. Sets, relations, functions. Elementary graph theory. Elementary number theory."
          courseColor={courseColors[12]}
        ></Course>
        <Course
          id="14"
          courseNumber="ENGR 2300"
          courseName="LINEAR ALGEBRA FOR ENGINEERS"
          courseLink="https://catalog.utdallas.edu/2015/undergraduate/courses/engr2300"
          courseDescription="Matlab; Matrices, vectors, linear systems of equations, Gauss-Jordan elimination, LU factorization and rank. Vector spaces, linear dependence/independence, basis, and change of basis. Linear transformations and matrix representation; similarity, scalar products, orthogonality, Gram-Schmidt procedures, and QR factorization. Determinants: eigenvalues, eigenvectors, and diagonalization."
          courseColor={courseColors[13]}
        ></Course>
        <Quarter quarter="2015 Fall"></Quarter>
        <Course
          id="15"
          courseNumber="CE 2336"
          courseName="COMPUTER SCIENCE II"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/ce2336"
          courseDescription="Java; recursion, fundamental data structures (including stacks, queues, linked lists, hash tables, trees, and graphs), and algorithmic analysis"
          courseColor={courseColors[14]}
        ></Course>
        <Course
          id="16"
          courseNumber="ENGR 3341"
          courseName="PROBABILITY THEORY & STATISTCS"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/engr3341"
          courseDescription="Axioms of probability, conditional probability, Bayes theorem, random variables, probability density/mass function (pdf/pmf), cumulative distribution function, expected value, functions of random variables, joint, conditional and marginal pdfs/pmfs for multiple random variables, moments, central limit theorem, elementary statistics, empirical distribution correlation."
          courseColor={courseColors[15]}
        ></Course>
        <Course
          id="17"
          courseNumber="GOVT 2305"
          courseName="AMERICAN NATIONAL GOVERNMENT"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/engr3341"
          courseDescription="American National Government"
          courseColor={courseColors[16]}
        ></Course>
        <Course
          id="18"
          courseNumber="MATH 2420"
          courseName="DIFFERENTIAL EQUATIONS W/APP"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/math2420"
          courseDescription="Differential Equations with Applications. Ordinary differential equations, including linear equations, systems of equations, equations with variable coefficients, existence and uniqueness of solutions, series solutions, singular points, transform methods, and boundary value problems; application of differential equations to real-world problems."
          courseColor={courseColors[17]}
        ></Course>
        <Course
          id="19"
          courseNumber="PHYS 2126"
          courseName="PHYSICS LABORATORY II"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/phys2126"
          courseDescription="Laboratory course to accompany any Physics II or Electricity and Magnetism course. Experiments investigate electrostatics, electricity in simple circuits, RC circuits and magnetism."
          courseColor={courseColors[18]}
        ></Course>
        <Course
          id="20"
          courseNumber="PHYS 2326"
          courseName="ELECTROMAGNETISM AND WAVES"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/phys2326"
          courseDescription="Electromagnetism and Waves. Topics include electrostatics and electromagnetics, electric field and potential, electric currents, magnetic fields, laws of Coulomb, Ampere, and Faraday, Maxwell's theory of wave propagation."
          courseColor={courseColors[19]}
        ></Course>
        <Course
          id="21"
          courseNumber="UNIV 4074"
          courseName="STUDENT LEADERSHIP"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/univ4074"
          courseDescription="Student Leadership. This is the required course for all students selected to participate in University recognized leadership programs, including but not limited to First Year Leaders, and Student Tour Ambassadors for Recruitment."
          courseColor={courseColors[20]}
        ></Course>
        <Quarter quarter="2016 Spring"></Quarter>
        <Course
          id="22"
          courseNumber="CE 3345"
          courseName="DATA STRUCTURES & ALGORM ANLYS"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/ce3345"
          courseDescription="Analysis of algorithms including time complexity and Big-O notation. Analysis of stacks, queues, and trees, including B-trees. Heaps, hashing, and advanced sorting techniques. Disjoint sets and graphs."
          courseColor={courseColors[21]}
        ></Course>
        <Course
          id="23"
          courseNumber="CS 3376"
          courseName="C C++ PROGRAM IN A UNIX ENVRNM"
          courseLink="https://catalog.utdallas.edu/2016/undergraduate/courses/cs3376"
          courseDescription="Advanced programming techniques utilizing procedural and object oriented programming in a UNIX environment. Topics include basic UNIX concepts, file input and output, implementation of strings, and dynamic memory allocation/management."
          courseColor={courseColors[22]}
        ></Course>
        <Course
          id="24"
          courseNumber="GOVT 2306"
          courseName="STATE AND LOCAL GOVERNMENT"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/govt2306"
          courseDescription=" State and Local Government(Texas)"
          courseColor={courseColors[23]}
        ></Course>
        <Course
          id="25"
          courseNumber="HIST 1302"
          courseName="US HIST SURVEY FROM CIVIL WAR"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/hist1302"
          courseDescription="U.S. History Survey from Civil War. An introduction to the methods of historical inquiry focusing on the study of American history from the American Civil War through the present."
          courseColor={courseColors[24]}
        ></Course>
        <Course
          id="26"
          courseNumber="RHET 1302"
          courseName="RHETORIC"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/rhet1302"
          courseDescription="An integrated approach to writing, reading, and critical thinking by developing the grammatical, logical, and rhetorical skills necessary for university writing."
          courseColor={courseColors[25]}
        ></Course>
        <Quarter quarter="2016 Fall"></Quarter>
        <Course
          id="27"
          courseNumber="CE 3101"
          courseName="ELECTRICL NETWORK ANALYSIS LAB"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/ce3101"
          courseDescription="Function generator; Digital multimeter; Power supplies; Analog oscilloscope; Design, assembly and testing of linear electrical networks and systems. Use of computers to control electrical equipment and acquire data. "
          courseColor={courseColors[26]}
        ></Course>
        <Course
          id="28"
          courseNumber="CE 3120"
          courseName="DIGITAL CIRCUITS LABORATORY"
          courseLink="https://catalog.utdallas.edu/2012/undergraduate/courses/ce3120"
          courseDescription=" Verilog; Xilinx HDL; Design, assembly, and testing of logic circuits. Use of programmable logic devices and simple CAD tools."
          courseColor={courseColors[27]}
        ></Course>
        <Course
          id="29"
          courseNumber="CE 3301"
          courseName="ELECTRICAL NETWORK ANALYSIS"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/ce3301"
          courseDescription="Analysis and design of RC, RL, and RLC electrical networks. Sinusoidal steady state analysis of passive networks using phasor representation; mesh and nodal analyses. Introduction to the concept of impulse response and frequency analysis using the Laplace transform."
          courseColor={courseColors[28]}
        ></Course>
        <Course
          id="30"
          courseNumber="CE 3320"
          courseName="DIGITAL CIRCUITS"
          courseLink="https://catalog.utdallas.edu/2012/undergraduate/courses/ce3320"
          courseDescription="combinational logic circuits using basic logic gates and other building blocks like multiplexers and ROMs.latches and flip-flops.synchronous state machines. State minimization and introduction to state assignment. Design of datapath components: adders, multipliers, registers, shifters, and counters. Electrical properties of logic gates"
          courseColor={courseColors[29]}
        ></Course>
        <Course
          id="31"
          courseNumber="CE 3354"
          courseName="SOFTWARE ENGINEERING"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/cs3354"
          courseDescription="Agile, Waterfall, software life cycle models. Software requirements engineering, formal specification and validation. Techniques for software design and testing. Cost estimation models. Issues in software quality assurance and software maintenance."
          courseColor={courseColors[30]}
        ></Course>
        <Course
          id="32"
          courseNumber="ECS 3390"
          courseName="PROF & TECHNICAL COMMUNICATION"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/ecs3390"
          courseDescription="Expands students' professional and team communication skills and strategies in technical contexts. Integrates writing, speaking and group communication by developing and presenting technical information to different audiences."
          courseColor={courseColors[31]}
        ></Course>
        <Course
          id="33"
          courseNumber="ENGR 3300"
          courseName="ADVANCED ENGINEERING MATH"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/engr3300"
          courseDescription="complex numbers, properties of complex-valued functions, scalar and vector fields, introduction to partial differential equations, and Fourier series. Examples are provided from electromagnetics, fluid mechanics, thermodynamics, and engineered systems."
          courseColor={courseColors[32]}
        ></Course>
        <Course
          id="34"
          courseNumber="UNIV 4074"
          courseName="STUDENT LEADERSHIP"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/engr3300"
          courseDescription="This is the required course for all students selected to participate in University recognized leadership programs"
          courseColor={courseColors[33]}
        ></Course>
        <Quarter quarter="2017 Spring"></Quarter>
        <Course
          id="35"
          courseNumber="CE 3110"
          courseName="ELECTRONIC DEVICES LABORATORY"
          courseLink="https://personal.utdallas.edu/~jblee/EE3110/index.htm"
          courseDescription="Oscilloscope; Source Measure Unit (SMU); Function generator; Bread board; Experimental determination and illustration of properties of carriers in
          semiconductors including carrier drift, photoconductivity, carrier diffusion; p-n junctions including forward and reverse
          bias effects, transient effects, photodiodes, and light emitting diodes; bipolar transistors including the Ebers-Moll model
          and secondary effects; field effect transistors including biasing effects, MOS capacitance and threshold voltage."
          courseColor={courseColors[34]}
        ></Course>
        <Course
          id="36"
          courseNumber="CE 3310"
          courseName="ELECTRONIC DEVICES"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/ce3310"
          courseDescription="Theory and application of solid state electronic devices. Physical principles of carrier motion in semiconductors leading to operating principles and circuit models for diodes, bipolar transistors, and field effect transistors. Introduction to integrated circuits."
          courseColor={courseColors[35]}
        ></Course>
        <Course
          id="37"
          courseNumber="CE 4304"
          courseName="COMPUTER ARCHITECTURE"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/ce4304"
          courseDescription="Introduction to computer organization and design. CPU performance analysis. Instruction set design, illustrated by the MIPS instruction set architecture. Systems-level view of computer arithmetic. Design of the datapath and control for a simple processor. Pipelining. Hierarchical memory. I/O systems. I/O performance analysis. Multiprocessing"
          courseColor={courseColors[36]}
        ></Course>
        <Course
          id="38"
          courseNumber="CE 4390"
          courseName="COMPUTER NETWORKS"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/ce4390"
          courseDescription="The design and analysis of computer networks. Topics include the ISO reference model, transmission media, medium-access protocols, LANs, data link protocols, routing, congestion control, internetworking, and connection management. "
          courseColor={courseColors[37]}
        ></Course>
        <Course
          id="39"
          courseNumber="ECS 3361"
          courseName="SOCIAL ISSUES & ETHICS IN CSE"
          courseLink="https://catalog.utdallas.edu/2012/undergraduate/courses/ecs3361"
          courseDescription="Social Issues and Ethics in Computer Science and Engineering"
          courseColor={courseColors[38]}
        ></Course>
        <Course
          id="40"
          courseNumber="HUMA 1301"
          courseName="EXPLORATION OF THE HUMANITIES"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/huma1301"
          courseDescription="An introduction to the concept of cultural tradition through the study of selected works of literature, philosophy, music, and visual art. Emphasis on the relations among various forms of cultural expression and developing students' ability to interpret complex artistic works in their historical, cultural, and intellectual contexts."
          courseColor={courseColors[39]}
        ></Course>
        <Course
          id="41"
          courseNumber="UNIV 4075"
          courseName="ADV UNIV ENGMT & APP LDSHP II"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/univ4075"
          courseDescription="This is a required course for all students selected to serve as returning mentors in the Freshman Mentor Program. We live in a time of unique social contexts and continuous change. This dynamic presents several potential challenges and necessary adjustments for young adults as they transition to the independence and period of personal development that occurs in college."
          courseColor={courseColors[40]}
        ></Course>
        <Quarter quarter="2018 Spring"></Quarter>
        <Course
          id="42"
          courseNumber="CE 3102"
          courseName="SIGNALS AND SYSTEMS LABORATORY"
          courseLink="https://catalog.utdallas.edu/2018/undergraduate/courses/ce3102"
          courseDescription="MATLAB and smartphone programming environments. Consist of introduction to the software tools utilized, linear time-invariant systems and convolution, Fourier series, continuous-time Fourier transform, sampling and discrete Fourier transform."
          courseColor={courseColors[41]}
        ></Course>
        <Course
          id="43"
          courseNumber="CE 3111"
          courseName="ELECTRONIC CIRCUITS LABORATORY"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/ce3111"
          courseDescription="Pspice; Design, assembly and testing of electronic circuits that use diodes, transistors and operational amplifiers in configurations typically encountered in practical applications."
          courseColor={courseColors[42]}
        ></Course>
        <Course
          id="44"
          courseNumber="CE 3302"
          courseName="SIGNALS AND SYSTEMS"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/ce3302"
          courseDescription="Introduces the fundamentals of continuous and discrete-time signal processing. Linear system analysis including convolution and impulse response, Fourier series, Fourier transform and applications, discrete-time signal analysis, sampling and z-transform."
          courseColor={courseColors[43]}
        ></Course>
        <Course
          id="45"
          courseNumber="CE 3311"
          courseName="ELECTRONIC CIRCUITS"
          courseLink="https://catalog.utdallas.edu/2012/undergraduate/courses/ce3311"
          courseDescription="Large-signal and small-signal characteristics of diodes, BJT and MOSFET transistors. Analysis of circuits containing diodes. Analysis of the DC and small-signal characteristics of single-stage BJT and MOSFET amplifiers. Analysis of circuits with an operational amplifier as a black box. Introduction of high-frequency models of BJT and MOSFET transistors and methods to analyze amplifier frequency response."
          courseColor={courseColors[44]}
        ></Course>
        <Course
          id="46"
          courseNumber="CE 4337"
          courseName="ORGANIZATION OF PRGRMNG LANG"
          courseLink="https://catalog.utdallas.edu/2014/undergraduate/courses/ce4337"
          courseDescription=" Haskell, Prolog. Principles of design and implementation of contemporary programming languages. Formal description including specification of syntax and semantics of programming languages. Language definition structures including binding, scoping, data types, control structures, parameter passing, abstraction mechanism, and run-time considerations. Design issues of imperative languages, object-oriented languages, functional languages and logic languages. Design, implement, and debug programs in various programming language paradigms"
          courseColor={courseColors[45]}
        ></Course>
        <Course
          id="47"
          courseNumber="CE 4348"
          courseName="OPERATING SYSTEMS CONCEPTS"
          courseLink="https://catalog.utdallas.edu/2012/undergraduate/courses/ce4348"
          courseDescription="process management, main memory management, virtual memory, I/O and device drivers, file systems, secondary storage management, and an introduction to critical sections and deadlocks"
          courseColor={courseColors[46]}
        ></Course>
        <Course
          id="48"
          courseNumber="CS 6360"
          courseName="DATABASE DESIGN"
          courseLink="https://personal.utdallas.edu/~mxk055100/courses/db08.htm"
          courseDescription="Java. Methods, principles, and concepts that are relevant to the practice of database software design. 
          Database system architecture; conceptual databasemodels; relational and object-oriented databases; 
          database system implementation; query processing and optimization; transaction processing concepts, 
          concurrency, and recovery; security."
          courseColor={courseColors[47]}
        ></Course>
        <Quarter quarter="2018 Summer"></Quarter>
        <Course
          id="49"
          courseNumber="CE 4388"
          courseName="SENIOR DESIGN PROJECT I"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/ce4388"
          courseDescription="First of two sequential semesters devoted to a team project that engages students in the full engineering design process."
          courseColor={courseColors[48]}
        ></Course>
        <Course
          id="50"
          courseNumber="EEDG 6301"
          courseName="ADVANCED DIGITAL LOGIC"
          courseLink="https://catalog.utdallas.edu/2017/undergraduate/courses/eedg6301"
          courseDescription="FPGA, Verilog, CAD tools for optimization, simulation and synthesis. Modern design techniques for digital logic. Logic synthesis and design methodology. Link between front-end and back-end design flows. Field programmable gate arrays and reconfigurable digital systems. Introduction to testing, simulation, fault diagnosis and design for testability."
          courseColor={courseColors[49]}
        ></Course>
        <Quarter quarter="2018 Fall"></Quarter>
        <Course
          id="51"
          courseNumber="CE 4389"
          courseName="SENIOR DESIGN PROJECT II"
          courseLink="https://catalog.utdallas.edu/2019/undergraduate/courses/ce4389"
          courseDescription="Continuation of the Senior Design project begun in the previous semester."
          courseColor={courseColors[50]}
        ></Course>
        <Course
          id="52"
          courseNumber="EECT 6325"
          courseName="VLSI DESIGN"
          courseLink="https://catalog.utdallas.edu/2019/graduate/courses/eect6325"
          courseDescription="Verilog, Library Compiler, Design Vision, HSPICE, WaveView,SiliconSmart,PrimeTime, Encounter. Introduction to MOS transistors. Analysis of the CMOS inverter. Combinational and sequential design techniques in VLSI; issues in static, transmission gate and dynamic logic design. Design and layout of complex gates, latches and flip-flops, arithmetic circuits, memory structures. Low power digital design. The method of logical effort. CMOS technology. Use of CAD tools to design, layout, check, extract and simulate a small project."
          courseColor={courseColors[51]}
        ></Course>
        <Course
          id="53"
          courseNumber="EEDG 6302"
          courseName="MICROPROCESSOR SYSTEMS"
          courseLink="https://catalog.utdallas.edu/2014/graduate/courses/eedg6302"
          courseDescription="Verilog. Design of microprocessor based systems including I/O and interface devices. Microprocessor architectures. Use of emulators and other sophisticated test equipment. Extensive laboratory work."
          courseColor={courseColors[52]}
        ></Course>
        <Quarter quarter="2019 Spring"></Quarter>
        <Course
          id="54"
          courseNumber="CE 6304"
          courseName="Computer Architecture"
          courseLink="https://catalog.utdallas.edu/2017/graduate/courses/cs6304"
          courseDescription="C/C++. Trends in processor, memory, I/O and system design. Techniques for quantitative analysis and evaluation of computer systems to understand and compare alternative design choices in system design. Components in high performance processors and computers: pipelining, instruction level parallelism, memory hierarchies, and input/output. Students will undertake a major computing system analysis and design project."
          courseColor={courseColors[53]}
        ></Course>
        <Course
          id="55"
          courseNumber="CS 6375"
          courseName="Machine Learning"
          courseLink="https://catalog.utdallas.edu/2017/graduate/courses/cs6375"
          courseDescription="Algorithms for training perceptions and multi-layer neural nets: back propagation, Boltzmann machines, and self-organizing nets. The ID3 and the Nearest Neighbor algorithms. Formal models for analyzing learnability: exact identification in the limit and probably approximately correct (PAC) identification. Computational limitations of learning machines."
          courseColor={courseColors[54]}
        ></Course>
        <Course
          id="56"
          courseNumber="CS 6390"
          courseName="Advanced Computer Networks"
          courseLink="https://catalog.utdallas.edu/2018/graduate/courses/cs6390"
          courseDescription="Survey of recent advancements in high-speed network technologies. Application of quantitative approach to the study of broadband integrated networks including admission control, access control, and quality of service guarantee"
          courseColor={courseColors[55]}
        ></Course>
      </div>
    );
  }
}

export default Classes;
