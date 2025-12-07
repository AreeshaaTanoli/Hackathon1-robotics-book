# Chapter 3: Types of Robots

## Objective

By the end of this chapter, you will be able to identify and describe different categories of robots based on their design, purpose, and operating environment. You'll understand what makes each type unique and recognize where different robot types excel. This knowledge will help you choose the right approach when designing your own robotic systems.

## Concepts

### Why Different Types Exist

Just as tools are designed for specific jobs—you wouldn't use a hammer to cut wood or a saw to drive nails—robots are specialized for particular tasks and environments. A robot optimized for factory welding looks nothing like one designed to vacuum your living room. Understanding these categories helps you recognize that "robot" isn't a single thing but rather a diverse family of machines, each evolved to solve different problems.

### Classification Approaches

Robots can be categorized in several ways: by their mechanical structure (humanoid, wheeled, aerial), by their level of autonomy (fully autonomous, semi-autonomous, teleoperated), or by their application domain (industrial, medical, military). In this chapter, we'll focus on application-based categories since they're most relevant to understanding how robots serve society.

### Degrees of Freedom

An important concept across all robot types is degrees of freedom (DOF)—the number of independent ways a robot can move. A simple wheeled robot might have two degrees of freedom (forward/backward and rotation). A robotic arm might have six, allowing it to reach any position and orientation in 3D space. More degrees of freedom generally mean more flexibility but also more complexity in control.

## Types

### Industrial Robots

Industrial robots are the workhorses of manufacturing. These are typically stationary robotic arms mounted in fixed positions on factory floors. They excel at repetitive, precise tasks performed thousands of times with identical accuracy.

**Characteristics**: High precision, speed, and repeatability; designed for 24/7 operation; typically programmed rather than autonomous; strong and durable for harsh environments.

**Common designs**: Six-axis articulated arms, SCARA (Selective Compliance Assembly Robot Arm) robots for assembly work, delta robots for high-speed picking and placing.

**Applications**: Welding, painting, assembly, material handling, packaging, quality inspection.

### Service Robots

Service robots interact with humans in everyday environments, performing tasks that help people in homes, hospitals, hotels, and public spaces. Unlike industrial robots working in controlled factory settings, service robots must navigate unpredictable human spaces safely.

**Characteristics**: Safety-focused design with sensors to avoid collisions; user-friendly interfaces; adaptable to changing environments; often mobile.

**Subcategories**: 
- **Domestic robots**: Vacuum cleaners (Roomba), lawn mowers, window cleaners
- **Professional service robots**: Delivery robots in hospitals, cleaning robots in airports, reception robots in hotels
- **Social robots**: Companions for elderly care, educational robots for children, customer service robots

**Applications**: Cleaning, delivery, reception, companionship, education, entertainment.

### Autonomous Mobile Robots (AMRs)

Autonomous mobile robots navigate independently without following fixed paths. They use sensors, maps, and artificial intelligence to understand their surroundings and plan routes dynamically. This distinguishes them from simpler automated guided vehicles (AGVs) that follow magnetic strips or wires.

**Characteristics**: Independent navigation using LIDAR, cameras, or ultrasonic sensors; ability to replan routes around obstacles; often use SLAM (Simultaneous Localization and Mapping) technology.

**Applications**: Warehouse logistics, inventory management, security patrol, agricultural field monitoring, environmental exploration.

### Medical Robots

Medical robots bring precision, stability, and new capabilities to healthcare. Some assist surgeons during operations, while others provide rehabilitation therapy or deliver medications in hospitals.

**Characteristics**: Extreme precision measured in millimeters or less; strict safety certifications; often teleoperated by skilled professionals; sterile materials.

**Types**:
- **Surgical robots**: Enhanced dexterity for minimally invasive procedures (da Vinci Surgical System)
- **Rehabilitation robots**: Assist patients recovering mobility after injury or stroke
- **Telepresence robots**: Allow doctors to remotely consult with patients
- **Pharmacy robots**: Automate medication dispensing with high accuracy

**Applications**: Surgery, rehabilitation, patient care, medication management, disinfection.

### Humanoid Robots

Humanoid robots mimic human form with a head, torso, two arms, and two legs. While this design isn't always the most efficient for specific tasks, it allows robots to use tools and navigate spaces designed for humans.

**Characteristics**: Bipedal locomotion (walking on two legs); anthropomorphic structure; complex balance systems; often used for research and demonstration.

**Challenges**: Walking stability is computationally intensive; many degrees of freedom require sophisticated control; expensive to build and maintain.

**Examples**: Honda's ASIMO, Boston Dynamics' Atlas, SoftBank's Pepper, Tesla's Optimus.

**Applications**: Research, entertainment, human-robot interaction studies, potentially future general-purpose assistants.

### Aerial Robots (Drones)

Drones, or unmanned aerial vehicles (UAVs), navigate three-dimensional airspace. Most consumer and commercial drones use multiple rotors (quadcopters, hexacopters) for stability and maneuverability.

**Characteristics**: Flight capability; high mobility; aerial perspective for sensing; limited battery life (typically 20-40 minutes); varying payload capacities.

**Applications**: Aerial photography and videography, package delivery, agricultural monitoring, search and rescue, infrastructure inspection, military reconnaissance.

### Underwater Robots

Underwater robots, or remotely operated vehicles (ROVs) and autonomous underwater vehicles (AUVs), explore and work in aquatic environments where humans cannot easily go.

**Characteristics**: Waterproof construction; pressure resistance for deep diving; specialized propulsion systems; often tethered for power and communication (ROVs) or fully autonomous (AUVs).

**Applications**: Ocean exploration, underwater pipeline inspection, marine biology research, shipwreck investigation, underwater construction and repair.

### Collaborative Robots (Cobots)

Cobots are specifically designed to work safely alongside humans without protective barriers. Unlike traditional industrial robots isolated in safety cages, cobots can share workspace with human workers.

**Characteristics**: Force-limiting capabilities to prevent injury; sensitive sensors to detect human presence; easy to reprogram for different tasks; lightweight and portable.

**Applications**: Assembly assistance, machine tending, quality inspection, packaging alongside human workers, small-batch manufacturing.

## Features

### Common Features Across Types

Despite their diversity, most robots share certain features:

**Sensors**: All robots need some way to perceive their environment, whether cameras, touch sensors, distance sensors, or specialized sensors like thermal imaging or chemical detection.

**Actuators**: Motors, servos, pneumatic cylinders, or other mechanisms that create movement and allow the robot to affect its environment.

**Control System**: The computational "brain" that processes sensor data and commands actuators, ranging from simple microcontrollers to powerful AI processors.

**Power System**: Batteries for mobile robots, wired power for stationary industrial robots, sometimes hybrid systems.

**Communication Interface**: Ways for humans to program, monitor, or control the robot—touchscreens, remote controls, computer interfaces, or voice commands.

### Specialized Features by Type

Different robot types have unique features matching their needs. Industrial robots prioritize precision and repeatability. Medical robots emphasize safety and sterilization. Aerial drones need lightweight construction and stabilization systems. Understanding these specializations helps you appreciate the engineering tradeoffs in robot design.

## Examples

**Industrial**: FANUC M-2000iA (heavy payload industrial arm), ABB IRB 6700 (versatile manufacturing robot)

**Service**: iRobot Roomba j7+ (vacuum), Starship delivery robots (autonomous package delivery)

**Medical**: da Vinci Xi Surgical System, Xenex LightStrike (disinfection robot)

**Humanoid**: Boston Dynamics Atlas (research platform), Sophia by Hanson Robotics (social interaction)

**Aerial**: DJI Mavic (consumer photography), Zipline medical delivery drones (emergency supplies)

**Underwater**: Woods Hole Oceanographic Institution's Sentry AUV (deep-sea exploration)

**Collaborative**: Universal Robots UR10e, Rethink Robotics Sawyer

## Exercises

### Exercise 1: Robot Type Identification
Look at five images of different robots (search online or use provided resources). Identify each robot's type and explain what features helped you categorize it. What clues did the physical design, environment, or visible sensors provide?

### Exercise 2: Design Challenge
Choose one of the robot types discussed. Sketch a new robot design within that category for a specific task not mentioned in the chapter. Label the key components (sensors, actuators, etc.) and explain why your design choices suit the task.

### Exercise 3: Comparison Matrix
Create a table comparing three robot types. Include columns for: typical environment, level of autonomy, primary sensors used, main applications, and one advantage and disadvantage of each type.

### Exercise 4: Real-World Research
Find a news article or video about a real robot currently being used in your community or country. Write a paragraph identifying its type, describing what it does, and explaining why that particular robot type was chosen for the application.

### Exercise 5: Future Application
Pick a problem you observe in daily life (traffic congestion, elderly care, food waste, etc.). Propose which type of robot could help solve it and explain your reasoning. Would existing robot types work, or would you need to combine features from multiple types?

### Exercise 6: Feature Analysis
Select one robot type from the chapter. List five specific features it must have to perform its job successfully. For each feature, explain why it's essential and what would happen if it were missing or inadequate.

---

**Chapter Summary**: Robots come in many forms, each optimized for specific applications and environments. Industrial robots bring precision to manufacturing, service robots help in human spaces, medical robots enhance healthcare, and specialized types like drones and underwater robots access previously unreachable environments. Understanding these categories helps you recognize appropriate robot types for different challenges. In the next chapter, we'll explore the sensors that enable robots to perceive and understand their surroundings.