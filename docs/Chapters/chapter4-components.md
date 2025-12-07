# Chapter 4: Robot Components and Building Basics

## Objective

By the end of this chapter, you will understand the essential hardware components that make robots work. You'll learn about motors, sensors, controllers, and electronics fundamentals. Most importantly, you'll gain practical knowledge of how to select and connect these components to build your first simple robot.

## Concepts

### The Robot as a System

Think of a robot as a system where multiple components work together harmoniously. The controller acts as the brain, sensors provide information about the environment, motors create movement, and the power supply energizes everything. Understanding each component individually helps you see how they integrate into a functional whole.

### Electrical Basics You Need to Know

Before working with robot components, grasp these fundamental concepts:

**Voltage (V)**: The electrical pressure that pushes current through a circuit, measured in volts. Think of it like water pressure in a pipe. Common robot voltages are 3.3V, 5V, and 12V.

**Current (A)**: The flow of electrical charge, measured in amperes (amps). This is like the amount of water flowing through a pipe. Motors draw more current than sensors.

**Resistance (Ω)**: Opposition to current flow, measured in ohms. Resistors limit current to protect components.

**Power (W)**: The rate of energy use, calculated as voltage multiplied by current (P = V × I). A 12V motor drawing 1A uses 12 watts.

### Circuit Basics

A circuit is a complete path for electricity to flow. Every circuit needs a power source (battery), a load (motor, LED, sensor), and a complete loop back to the power source. The positive terminal (+) provides power, and the negative terminal (ground or GND) completes the circuit.

## Motors

Motors convert electrical energy into mechanical motion. Different motor types suit different robotic applications.

### DC Motors

Direct Current (DC) motors spin continuously when voltage is applied. They're simple, affordable, and perfect for driving wheels. Speed varies with voltage—more voltage means faster spinning.

**Characteristics**: Continuous rotation, variable speed, bidirectional (can reverse), moderate precision.

**Applications**: Wheel drive systems, fans, simple movement tasks.

**Key specifications**: Voltage rating (3V, 6V, 12V), speed (RPM - rotations per minute), torque (twisting force).

### Servo Motors

Servos provide precise angular control, typically rotating 0-180 degrees to specific positions. They contain a motor, gearbox, position sensor, and control circuit in one package.

**Characteristics**: Position control, moderate torque, limited rotation range (standard servos), easy to control.

**Applications**: Robotic arms, steering mechanisms, camera gimbals, gripper fingers.

**Control**: Servos use PWM (Pulse Width Modulation) signals. The width of electrical pulses determines the servo position.

### Stepper Motors

Stepper motors move in precise discrete steps rather than continuous rotation. They can hold position without power and provide excellent position accuracy.

**Characteristics**: Precise positioning, good holding torque, more complex control, no position feedback needed.

**Applications**: 3D printers, CNC machines, precise positioning systems.

## Sensors

Sensors give robots perception—the ability to understand their environment. Each sensor type detects different phenomena.

### Ultrasonic Distance Sensors

These sensors measure distance by sending ultrasonic sound waves and timing how long echoes take to return. Like bat echolocation, they work well for detecting obstacles.

**Range**: Typically 2cm to 4 meters
**Applications**: Obstacle avoidance, distance measurement, environment mapping

### Infrared (IR) Sensors

IR sensors detect infrared light. Some emit IR light and detect reflections (like line-following sensors), while others detect IR radiation from objects (like motion sensors).

**Types**: Reflective IR (line detection), IR distance sensors, PIR motion sensors
**Applications**: Line following, proximity detection, motion-triggered actions

### Light Sensors (Photoresistors)

Light-dependent resistors (LDRs) change resistance based on light intensity. More light means lower resistance.

**Applications**: Light-seeking robots, ambient light detection, shadow detection

### Touch and Limit Switches

Physical switches detect contact or the end of travel range. They're simple, reliable, and essential for detecting collisions or position limits.

**Types**: Push buttons, microswitches, bumper switches
**Applications**: Collision detection, end-stop detection, user input

### Gyroscopes and Accelerometers

These sensors measure orientation and acceleration, helping robots understand their own movement and position.

**Applications**: Balance control, orientation detection, navigation

## Controllers

Controllers are the decision-making component that processes sensor inputs and commands outputs. They execute your programmed instructions.

### What Controllers Do

Controllers read sensor values, perform calculations, make decisions based on programmed logic, and send signals to motors and other actuators. They operate in a continuous loop: read sensors, process data, control actuators, repeat.

### Types of Control

**Open-loop control**: Commands are sent without feedback. You tell a motor to spin for 2 seconds without checking if it actually did.

**Closed-loop control**: Sensors provide feedback that the controller uses to adjust actions. The controller monitors results and corrects errors.

## Microcontrollers

Microcontrollers are small computers designed for embedded applications. They're the most common robot controllers for hobbyists and educational projects.

### Arduino

Arduino is an open-source platform featuring easy-to-use hardware and software. Arduino boards contain a microcontroller, power regulation, and input/output pins for connecting sensors and motors.

**Popular models**: 
- Arduino Uno: Great for beginners, 14 digital pins, 6 analog pins
- Arduino Nano: Compact version with similar capabilities
- Arduino Mega: More pins for complex projects

**Programming**: Uses a simplified C++ language with extensive libraries and examples.

### Raspberry Pi

Raspberry Pi is a small single-board computer, more powerful than Arduino but also more complex. It runs a full operating system (typically Linux).

**Advantages**: Can run complex programs, has built-in WiFi and Bluetooth, supports cameras and displays, better for AI and image processing.

**When to use**: Projects needing more computational power, computer vision, wireless communication, or multiple simultaneous tasks.

### ESP32

ESP32 combines microcontroller functionality with built-in WiFi and Bluetooth, perfect for IoT (Internet of Things) robots.

**Advantages**: Wireless connectivity, low cost, dual-core processor, low power consumption.

## Electronics Basics

### Breadboards

Breadboards allow you to prototype circuits without soldering. Internal metal strips connect holes in rows, letting you easily connect components.

**How to use**: Insert component leads into holes. Components in the same row are electrically connected. Power rails (marked + and -) run along the sides for distributing power.

### Wiring

Use jumper wires to connect components. Solid-core wires work best in breadboards, while stranded wires are more flexible for connections between boards and motors.

**Color conventions**: Red for positive voltage, black for ground (negative), other colors for signals.

### Power Supplies

Robots need appropriate power. Batteries are common for mobile robots:

**AA/AAA batteries**: 1.5V each, connect in series to add voltages (4 AA batteries = 6V)
**9V batteries**: Convenient but limited capacity
**Lithium polymer (LiPo) batteries**: Rechargeable, high capacity, common voltages: 3.7V, 7.4V, 11.1V
**USB power banks**: 5V output, convenient for low-power projects

**Important**: Match voltage to your components. Too much voltage can destroy electronics. Use voltage regulators if needed.

### Motor Drivers

Microcontrollers can't provide enough current to run motors directly. Motor drivers are circuits that take low-power signals from your controller and switch high-power current to motors.

**Common types**: L298N (dual motor driver), L9110 (small motors), TB6612FNG (efficient and compact)

**Function**: Allow microcontroller to control motor speed and direction without drawing high current through the controller itself.

## Steps to Build a Simple Robot

### Project: Obstacle-Avoiding Robot

Let's build a basic wheeled robot that moves forward and turns away from obstacles.

**Step 1: Gather Components**
- Arduino Uno or compatible board
- 2 DC motors with wheels
- Motor driver module (L298N)
- Ultrasonic sensor (HC-SR04)
- Chassis (kit or DIY from cardboard)
- Battery pack (4 AA batteries = 6V)
- Jumper wires
- Breadboard (optional)

**Step 2: Assemble the Chassis**
Mount motors on opposite sides of the chassis. Attach wheels to motor shafts. Add a caster wheel or ball bearing at the front or rear for balance.

**Step 3: Wire the Motors**
Connect motors to the motor driver outputs. Connect motor driver power to battery pack (observe polarity: + to +, - to -). Connect motor driver control pins to Arduino digital pins (e.g., pins 5, 6, 7, 8).

**Step 4: Mount the Ultrasonic Sensor**
Position sensor at the robot's front facing forward. Connect VCC to 5V, GND to ground, TRIG to digital pin 9, ECHO to digital pin 10.

**Step 5: Power the Arduino**
Connect Arduino to battery pack or separate power supply. Ensure all grounds are connected together (common ground).

**Step 6: Program the Robot**
Write code that reads the ultrasonic sensor, moves forward when the path is clear, and turns when an obstacle is detected within a threshold distance (e.g., 20cm).

**Step 7: Test and Refine**
Test on a clear floor. Adjust distance threshold, turning duration, and motor speeds until behavior is reliable.

### Safety Notes

- Double-check wiring before applying power
- Never connect motors directly to microcontroller pins
- Ensure correct polarity when connecting batteries
- Start with low speeds while testing
- Work on a stable surface to prevent falls

## Exercises

### Exercise 1: Component Identification
Look at an Arduino Uno board (physical or image). Identify and label: the microcontroller chip, digital pins, analog pins, power pins (5V, 3.3V, GND), USB connector, and power jack.

### Exercise 2: Circuit Planning
Draw a simple circuit diagram showing how to connect a DC motor to an Arduino using a motor driver. Include the battery, all connections, and label voltages and pins.

### Exercise 3: Sensor Selection
You're designing a line-following robot. List three sensors it needs and explain what each one detects. Would you choose IR sensors, ultrasonic sensors, or light sensors for line detection? Justify your choice.

### Exercise 4: Power Calculation
A robot has two motors that each draw 200mA (0.2A) at 6V, an Arduino drawing 50mA at 5V, and an ultrasonic sensor drawing 15mA at 5V. Calculate the total current draw when both motors are running. Would 4 AA batteries (total capacity typically 2000mAh) power this robot for at least one hour?

### Exercise 5: Troubleshooting Practice
Your robot's motors aren't spinning. List five things you would check to diagnose the problem, in order from most likely to least likely.

### Exercise 6: Design Modification
Modify the obstacle-avoiding robot design to add a buzzer that beeps when an obstacle is detected. What additional component do you need? Which Arduino pin would you use? Draw or describe the added connection.

---

**Chapter Summary**: Robots combine motors for movement, sensors for perception, controllers for decision-making, and electronics for connecting everything. Understanding voltage, current, and circuits helps you wire components safely. Microcontrollers like Arduino make programming accessible, while motor drivers safely control high-current actuators. With these fundamentals, you can build simple robots and understand how complex robots work. In the next chapter, we'll dive deeper into programming logic and control algorithms.