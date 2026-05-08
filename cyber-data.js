// CyberLearn - Comprehensive Cybersecurity Curriculum Data
const curriculumData = {
    categories: [
        {
            id: 'fundamentals',
            name: 'Fundamentals',
            icon: '📚',
            topics: [
                {
                    id: 'what-is-cybersecurity',
                    name: 'What is Cybersecurity?',
                    difficulty: 'beginner',
                    content: `
                        <h2>Understanding Cybersecurity</h2>
                        <p>Cybersecurity is the practice of protecting computer systems and networks from unauthorized access, use, disclosure, disruption, modification, or destruction. It encompasses technology, processes, and people.</p>
                        
                        <h3>The CIA Triad</h3>
                        <svg viewBox="0 0 400 350" style="width: 100%; max-width: 500px; margin: 20px 0;">
                            <!-- Triangle -->
                            <polygon points="200,50 80,300 320,300" fill="none" stroke="#1e40af" stroke-width="3"/>
                            
                            <!-- Labels -->
                            <circle cx="200" cy="80" r="40" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/>
                            <text x="200" y="85" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="16">Confidentiality</text>
                            
                            <circle cx="100" cy="280" r="40" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="2"/>
                            <text x="100" y="285" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="16">Integrity</text>
                            
                            <circle cx="300" cy="280" r="40" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
                            <text x="300" y="285" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="16">Availability</text>
                            
                            <!-- Center text -->
                            <text x="200" y="210" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="18">CIA Triad</text>
                        </svg>
                        
                        <h3>Key Pillars of Cybersecurity</h3>
                        <ul>
                            <li><strong>Confidentiality:</strong> Ensuring information is not disclosed to unauthorized parties</li>
                            <li><strong>Integrity:</strong> Maintaining accuracy and completeness of information</li>
                            <li><strong>Availability:</strong> Ensuring systems and data are accessible when needed</li>
                        </ul>

                        <h3>Why Cybersecurity Matters</h3>
                        <ul>
                            <li>Protecting sensitive personal and financial information</li>
                            <li>Maintaining business continuity</li>
                            <li>Compliance with regulatory requirements</li>
                            <li>Building trust with customers</li>
                            <li>Preventing financial loss from cyber attacks</li>
                        </ul>
                    `,
                    tools: ['NIST Framework', 'Security Frameworks', 'Risk Assessment Tools'],
                    quiz: [
                        {
                            question: 'Which of the following is NOT part of the CIA Triad?',
                            options: ['Confidentiality', 'Integrity', 'Authenticity', 'Availability'],
                            correct: 2,
                            explanation: 'The CIA Triad consists of Confidentiality, Integrity, and Availability. Authenticity is a separate security concept.'
                        },
                        {
                            question: 'What does confidentiality mean in cybersecurity?',
                            options: ['Data is accurate', 'Data is accessible', 'Data is not disclosed to unauthorized parties', 'Data is encrypted'],
                            correct: 2,
                            explanation: 'Confidentiality ensures that sensitive information is not disclosed to unauthorized parties.'
                        }
                    ]
                },
                {
                    id: 'types-of-threats',
                    name: 'Types of Cyber Threats',
                    difficulty: 'beginner',
                    content: `
                        <h2>Common Cyber Threats</h2>
                        <p>Understanding different types of threats is crucial for building effective defenses.</p>

                        <h3>Malware</h3>
                        <p>Malicious software designed to harm or exploit your device or network.</p>
                        <ul>
                            <li><strong>Viruses:</strong> Programs that attach to files and spread</li>
                            <li><strong>Worms:</strong> Self-replicating programs that spread across networks</li>
                            <li><strong>Trojans:</strong> Disguised as legitimate software to gain unauthorized access</li>
                            <li><strong>Ransomware:</strong> Encrypts data and demands payment for decryption</li>
                        </ul>

                        <h3>Social Engineering</h3>
                        <p>Manipulating people into divulging confidential information or performing actions that compromise security.</p>
                        <ul>
                            <li>Phishing: Deceptive emails to steal credentials</li>
                            <li>Pretexting: Creating false scenarios to build trust</li>
                            <li>Baiting: Offering something to entice unauthorized access</li>
                        </ul>

                        <h3>Network Attacks</h3>
                        <ul>
                            <li><strong>DDoS:</strong> Overwhelming systems with traffic</li>
                            <li><strong>Man-in-the-Middle:</strong> Intercepting communications</li>
                            <li><strong>SQL Injection:</strong> Exploiting database vulnerabilities</li>
                        </ul>
                    `,
                    tools: ['Antivirus Software', 'Firewalls', 'IDS/IPS'],
                    quiz: [
                        {
                            question: 'What is a Trojan in cybersecurity?',
                            options: ['A virus that spreads via email', 'Software that hides malicious code in legitimate-looking programs', 'A network protocol', 'A type of encryption'],
                            correct: 1,
                            explanation: 'A Trojan is malicious software disguised as legitimate software to gain unauthorized access.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'network-security',
            name: 'Network Security',
            icon: '🌐',
            topics: [
                {
                    id: 'networking-basics',
                    name: 'Networking Basics',
                    difficulty: 'beginner',
                    content: `
                        <h2>Understanding Computer Networks</h2>
                        <p>A computer network is a collection of devices connected together to share resources and information.</p>

                        <h3>OSI Model (7 Layers)</h3>
                        <svg viewBox="0 0 400 500" style="width: 100%; max-width: 450px; margin: 20px 0;">
                            <!-- Layers -->
                            <rect x="50" y="20" width="300" height="60" fill="#10b981" stroke="#065f46" stroke-width="2"/>
                            <text x="200" y="55" text-anchor="middle" fill="white" font-weight="bold" font-size="16">7. Application Layer</text>
                            
                            <rect x="50" y="85" width="300" height="60" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/>
                            <text x="200" y="120" text-anchor="middle" fill="white" font-weight="bold" font-size="16">6. Presentation Layer</text>
                            
                            <rect x="50" y="150" width="300" height="60" fill="#06b6d4" stroke="#0d9488" stroke-width="2"/>
                            <text x="200" y="185" text-anchor="middle" fill="white" font-weight="bold" font-size="16">5. Session Layer</text>
                            
                            <rect x="50" y="215" width="300" height="60" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
                            <text x="200" y="250" text-anchor="middle" fill="white" font-weight="bold" font-size="16">4. Transport (TCP/UDP)</text>
                            
                            <rect x="50" y="280" width="300" height="60" fill="#ec4899" stroke="#831843" stroke-width="2"/>
                            <text x="200" y="315" text-anchor="middle" fill="white" font-weight="bold" font-size="16">3. Network (IP)</text>
                            
                            <rect x="50" y="345" width="300" height="60" fill="#8b5cf6" stroke="#5b21b6" stroke-width="2"/>
                            <text x="200" y="380" text-anchor="middle" fill="white" font-weight="bold" font-size="16">2. Data Link (MAC)</text>
                            
                            <rect x="50" y="410" width="300" height="60" fill="#6366f1" stroke="#312e81" stroke-width="2"/>
                            <text x="200" y="445" text-anchor="middle" fill="white" font-weight="bold" font-size="16">1. Physical (Cables)</text>
                        </svg>

                        <h3>OSI Model (7 Layers)</h3>
                        <ol>
                            <li><strong>Physical:</strong> Hardware and cables</li>
                            <li><strong>Data Link:</strong> MAC addresses and switching</li>
                            <li><strong>Network:</strong> IP addresses and routing</li>
                            <li><strong>Transport:</strong> TCP and UDP</li>
                            <li><strong>Session:</strong> Session management</li>
                            <li><strong>Presentation:</strong> Data formatting and encryption</li>
                            <li><strong>Application:</strong> User applications and services</li>
                        </ol>

                        <h3>TCP/IP Model</h3>
                        <p>The practical model used in modern internet communications, consisting of 4 layers instead of 7.</p>

                        <h3>IP Addresses</h3>
                        <ul>
                            <li><strong>IPv4:</strong> 32-bit address (e.g., 192.168.1.1)</li>
                            <li><strong>IPv6:</strong> 128-bit address for future internet expansion</li>
                        </ul>
                    `,
                    tools: ['Wireshark', 'netstat', 'ifconfig/ipconfig'],
                    quiz: [
                        {
                            question: 'How many layers does the OSI model have?',
                            options: ['4', '5', '7', '9'],
                            correct: 2,
                            explanation: 'The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.'
                        }
                    ]
                },
                {
                    id: 'firewalls-vpn',
                    name: 'Firewalls & VPNs',
                    difficulty: 'intermediate',
                    content: `
                        <h2>Firewalls</h2>
                        <p>A firewall is a network security system that monitors and controls incoming and outgoing traffic.</p>

                        <h3>Firewall Architecture</h3>
                        <svg viewBox="0 0 600 250" style="width: 100%; max-width: 600px; margin: 20px 0;">
                            <!-- Internet -->
                            <rect x="10" y="80" width="80" height="80" fill="#ef4444" opacity="0.2" stroke="#dc2626" stroke-width="2" rx="5"/>
                            <text x="50" y="130" text-anchor="middle" font-weight="bold" fill="#7f1d1d" font-size="14">Internet</text>
                            
                            <!-- Firewall -->
                            <rect x="120" y="60" width="100" height="120" fill="#1e40af" opacity="0.3" stroke="#1e40af" stroke-width="3" rx="5"/>
                            <text x="170" y="125" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">🔥 Firewall</text>
                            
                            <!-- Internal Network -->
                            <rect x="270" y="80" width="320" height="80" fill="#10b981" opacity="0.2" stroke="#047857" stroke-width="2" rx="5"/>
                            <text x="370" y="115" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="14">Internal Network</text>
                            
                            <!-- Computers -->
                            <circle cx="320" cy="140" r="20" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/>
                            <text x="320" y="145" text-anchor="middle" fill="white" font-weight="bold" font-size="12">PC</text>
                            
                            <circle cx="420" cy="140" r="20" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/>
                            <text x="420" y="145" text-anchor="middle" fill="white" font-weight="bold" font-size="12">PC</text>
                            
                            <circle cx="520" cy="140" r="20" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/>
                            <text x="520" y="145" text-anchor="middle" fill="white" font-weight="bold" font-size="12">PC</text>
                            
                            <!-- Arrows -->
                            <path d="M 90 120 L 120 120" stroke="#1e40af" stroke-width="2" marker-end="url(#arrowhead)"/>
                            <path d="M 220 120 L 270 120" stroke="#1e40af" stroke-width="2" marker-end="url(#arrowhead)"/>
                            
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#1e40af"/>
                                </marker>
                            </defs>
                        </svg>

                        <h3>Types of Firewalls</h3>
                        <ul>
                            <li><strong>Packet Filtering:</strong> Examines packet headers</li>
                            <li><strong>Stateful:</strong> Tracks connection states</li>
                            <li><strong>Proxy:</strong> Acts as intermediary between client and server</li>
                            <li><strong>Application Layer:</strong> Inspects application data</li>
                        </ul>

                        <h3>VPN (Virtual Private Network)</h3>
                        <p>A VPN creates an encrypted tunnel for secure communication over public networks.</p>

                        <h3>VPN Tunnel Illustration</h3>
                        <svg viewBox="0 0 600 150" style="width: 100%; max-width: 600px; margin: 20px 0;">
                            <!-- User Device -->
                            <rect x="20" y="50" width="80" height="60" fill="#0ea5e9" opacity="0.3" stroke="#0369a1" stroke-width="2" rx="5"/>
                            <text x="60" y="85" text-anchor="middle" font-weight="bold" font-size="12">Your Device</text>
                            
                            <!-- Encrypted Tunnel -->
                            <ellipse cx="300" cy="80" rx="150" ry="40" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="5,5"/>
                            <text x="300" y="60" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">🔒 Encrypted Tunnel</text>
                            
                            <!-- VPN Server -->
                            <rect x="500" y="50" width="80" height="60" fill="#10b981" opacity="0.3" stroke="#047857" stroke-width="2" rx="5"/>
                            <text x="540" y="85" text-anchor="middle" font-weight="bold" font-size="12">VPN Server</text>
                            
                            <!-- Arrow -->
                            <path d="M 100 80 L 150 80" stroke="#10b981" stroke-width="2" marker-end="url(#arrowgreen)"/>
                            <path d="M 450 80 L 500 80" stroke="#10b981" stroke-width="2" marker-end="url(#arrowgreen)"/>
                            
                            <defs>
                                <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#10b981"/>
                                </marker>
                            </defs>
                        </svg>

                        <h3>VPN Protocols</h3>
                        <ul>
                            <li><strong>OpenVPN:</strong> Open-source, highly flexible</li>
                            <li><strong>WireGuard:</strong> Modern, lightweight protocol</li>
                            <li><strong>IPSec:</strong> Industry standard for VPNs</li>
                        </ul>

                        <div class="code-block">
// Example: Checking firewall status in Linux
sudo ufw status
sudo iptables -L
                        </div>
                    `,
                    tools: ['UFW', 'iptables', 'OpenVPN', 'WireGuard'],
                    quiz: [
                        {
                            question: 'What does a firewall do?',
                            options: ['Encrypts all traffic', 'Monitors and controls network traffic', 'Prevents viruses', 'Backs up data'],
                            correct: 1,
                            explanation: 'A firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules.'
                        }
                    ]
                },
                {
                    id: 'intrusion-detection',
                    name: 'Intrusion Detection Systems',
                    difficulty: 'intermediate',
                    content: `
                        <h2>IDS and IPS</h2>

                        <h3>Intrusion Detection System (IDS)</h3>
                        <p>Monitors network traffic for suspicious activity and alerts administrators.</p>

                        <h3>Intrusion Prevention System (IPS)</h3>
                        <p>Similar to IDS but actively blocks detected threats.</p>

                        <h3>Popular IDS/IPS Tools</h3>
                        <ul>
                            <li><strong>Snort:</strong> Open-source network IPS</li>
                            <li><strong>Suricata:</strong> High-performance network threat detection engine</li>
                            <li><strong>Zeek:</strong> Network security monitoring platform</li>
                        </ul>

                        <h3>Detection Methods</h3>
                        <ul>
                            <li><strong>Signature-based:</strong> Detects known attack patterns</li>
                            <li><strong>Anomaly-based:</strong> Detects unusual behavior</li>
                            <li><strong>Hybrid:</strong> Combines both approaches</li>
                        </ul>
                    `,
                    tools: ['Snort', 'Suricata', 'Zeek', 'Ossec'],
                    quiz: [
                        {
                            question: 'What is the main difference between IDS and IPS?',
                            options: ['IDS encrypts data while IPS monitors', 'IDS detects threats while IPS blocks them', 'IDS is for networks and IPS for servers', 'No difference'],
                            correct: 1,
                            explanation: 'IDS (Intrusion Detection System) detects and alerts on threats, while IPS (Intrusion Prevention System) actively blocks detected threats.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'web-security',
            name: 'Web Security',
            icon: '🌐',
            topics: [
                {
                    id: 'owasp-top-10',
                    name: 'OWASP Top 10',
                    difficulty: 'intermediate',
                    content: `
                        <h2>OWASP Top 10 Vulnerabilities</h2>
                        <p>The OWASP Top 10 is a standard awareness document for web application security.</p>

                        <h3>Latest OWASP Top 10 (2021)</h3>
                        <ol>
                            <li><strong>Broken Access Control:</strong> Unauthorized access to resources</li>
                            <li><strong>Cryptographic Failures:</strong> Exposure of sensitive data</li>
                            <li><strong>Injection:</strong> SQL, NoSQL, command injection</li>
                            <li><strong>Insecure Design:</strong> Missing security controls</li>
                            <li><strong>Security Misconfiguration:</strong> Improper configuration</li>
                            <li><strong>Vulnerable Components:</strong> Using outdated libraries</li>
                            <li><strong>Auth Failures:</strong> Broken authentication</li>
                            <li><strong>Software Data Integrity:</strong> Insecure CI/CD</li>
                            <li><strong>Logging & Monitoring:</strong> Insufficient logging</li>
                            <li><strong>SSRF:</strong> Server-side request forgery</li>
                        </ol>

                        <h3>SQL Injection Example</h3>
                        <div class="code-block">
// Vulnerable code
$query = "SELECT * FROM users WHERE username = '" + input + "'";

// Attacker input: ' OR '1'='1
// Results in: SELECT * FROM users WHERE username = '' OR '1'='1'
// This returns all users!

// Safe approach: Use parameterized queries
$query = "SELECT * FROM users WHERE username = ?";
                        </div>
                    `,
                    tools: ['OWASP ZAP', 'Burp Suite', 'SQLmap'],
                    quiz: [
                        {
                            question: 'What is SQL Injection?',
                            options: ['A database backup method', 'Injecting malicious SQL code into input fields', 'A type of encryption', 'A database optimization technique'],
                            correct: 1,
                            explanation: 'SQL Injection is a technique where attackers inject malicious SQL code into input fields to access or manipulate database data.'
                        }
                    ]
                },
                {
                    id: 'https-ssl-tls',
                    name: 'HTTPS, SSL/TLS',
                    difficulty: 'intermediate',
                    content: `
                        <h2>Secure Communication</h2>

                        <h3>HTTPS vs HTTP</h3>
                        <svg viewBox="0 0 600 200" style="width: 100%; max-width: 600px; margin: 20px 0;">
                            <!-- HTTP -->
                            <rect x="20" y="20" width="240" height="150" fill="#ef4444" opacity="0.1" stroke="#dc2626" stroke-width="2" rx="5"/>
                            <text x="140" y="50" text-anchor="middle" font-weight="bold" fill="#7f1d1d" font-size="16">HTTP (Insecure)</text>
                            <text x="140" y="80" text-anchor="middle" fill="#7f1d1d" font-size="12">Data sent in plain text</text>
                            <text x="140" y="100" text-anchor="middle" fill="#7f1d1d" font-size="12">Vulnerable to interception</text>
                            <text x="140" y="120" text-anchor="middle" fill="#7f1d1d" font-size="12">Port: 80</text>
                            <text x="140" y="140" text-anchor="middle" fill="#7f1d1d" font-size="12">❌ No SSL/TLS</text>
                            
                            <!-- HTTPS -->
                            <rect x="340" y="20" width="240" height="150" fill="#10b981" opacity="0.1" stroke="#047857" stroke-width="2" rx="5"/>
                            <text x="460" y="50" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="16">HTTPS (Secure)</text>
                            <text x="460" y="80" text-anchor="middle" fill="#065f46" font-size="12">Data encrypted</text>
                            <text x="460" y="100" text-anchor="middle" fill="#065f46" font-size="12">Protected from interception</text>
                            <text x="460" y="120" text-anchor="middle" fill="#065f46" font-size="12">Port: 443</text>
                            <text x="460" y="140" text-anchor="middle" fill="#065f46" font-size="12">✓ SSL/TLS Encrypted</text>
                        </svg>

                        <h3>SSL/TLS Certificates</h3>
                        <ul>
                            <li><strong>Self-signed:</strong> Created by the server, not trusted by browsers</li>
                            <li><strong>Domain Validated:</strong> CA verifies domain ownership</li>
                            <li><strong>Organization Validated:</strong> CA verifies organization identity</li>
                            <li><strong>Extended Validation:</strong> Highest verification level</li>
                        </ul>

                        <h3>TLS Handshake Process</h3>
                        <svg viewBox="0 0 600 350" style="width: 100%; max-width: 600px; margin: 20px 0;">
                            <!-- Client and Server -->
                            <rect x="30" y="20" width="100" height="50" fill="#0ea5e9" opacity="0.3" stroke="#0369a1" stroke-width="2" rx="5"/>
                            <text x="80" y="50" text-anchor="middle" font-weight="bold" font-size="12">Client</text>
                            
                            <rect x="470" y="20" width="100" height="50" fill="#10b981" opacity="0.3" stroke="#047857" stroke-width="2" rx="5"/>
                            <text x="520" y="50" text-anchor="middle" font-weight="bold" font-size="12">Server</text>
                            
                            <!-- Step 1 -->
                            <path d="M 130 80 L 470 100" stroke="#1e40af" stroke-width="2" marker-end="url(#arrow1)"/>
                            <text x="300" y="95" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">1. ClientHello</text>
                            
                            <!-- Step 2 -->
                            <path d="M 470 130 L 130 150" stroke="#1e40af" stroke-width="2" marker-end="url(#arrow1)"/>
                            <text x="300" y="145" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">2. ServerHello + Cert</text>
                            
                            <!-- Step 3 -->
                            <path d="M 130 180 L 470 200" stroke="#1e40af" stroke-width="2" marker-end="url(#arrow1)"/>
                            <text x="300" y="195" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">3. Key Exchange</text>
                            
                            <!-- Step 4 -->
                            <path d="M 470 230 L 130 250" stroke="#10b981" stroke-width="2" marker-end="url(#arrow2)"/>
                            <text x="300" y="245" text-anchor="middle" fill="#10b981" font-weight="bold" font-size="11">4. Session Keys Derived</text>
                            
                            <!-- Final State -->
                            <rect x="100" y="280" width="400" height="50" fill="#10b981" opacity="0.15" stroke="#047857" stroke-width="2" rx="5"/>
                            <text x="300" y="310" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="13">✓ Secure Connection Established - Data Encrypted</text>
                            
                            <defs>
                                <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#1e40af"/>
                                </marker>
                                <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#10b981"/>
                                </marker>
                            </defs>
                        </svg>

                        <h3>TLS Handshake Steps</h3>
                        <ol>
                            <li>Client sends ClientHello</li>
                            <li>Server responds with ServerHello and certificate</li>
                            <li>Client verifies certificate and sends key exchange</li>
                            <li>Session keys are derived for encryption</li>
                        </ol>

                        <div class="code-block">
# Check certificate validity
openssl s_client -connect example.com:443

# Generate self-signed certificate
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
                        </div>
                    `,
                    tools: ['OpenSSL', 'Let\'s Encrypt', 'Certbot'],
                    quiz: [
                        {
                            question: 'What does HTTPS provide that HTTP does not?',
                            options: ['Faster connection', 'Encryption and security', 'More bandwidth', 'Better caching'],
                            correct: 1,
                            explanation: 'HTTPS adds encryption through SSL/TLS, protecting data from being intercepted or modified in transit.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'ethical-hacking',
            name: 'Ethical Hacking',
            icon: '🎯',
            topics: [
                {
                    id: 'penetration-testing',
                    name: 'Penetration Testing Basics',
                    difficulty: 'intermediate',
                    content: `
                        <h2>Penetration Testing</h2>
                        <p>A legitimate security test where authorized professionals simulate attacks to find vulnerabilities.</p>

                        <h3>Phases of Penetration Testing</h3>
                        <svg viewBox="0 0 700 200" style="width: 100%; max-width: 700px; margin: 20px 0;">
                            <defs>
                                <marker id="arrowPhase" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#1e40af"/>
                                </marker>
                            </defs>
                            
                            <!-- Phase boxes -->
                            <rect x="10" y="60" width="90" height="80" fill="#3b82f6" opacity="0.2" stroke="#1e40af" stroke-width="2" rx="3"/>
                            <text x="55" y="95" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="11">1. Recon</text>
                            <text x="55" y="115" text-anchor="middle" font-size="10" fill="#1e40af">Gather Info</text>
                            
                            <path d="M 100 100 L 120 100" stroke="#1e40af" stroke-width="2" marker-end="url(#arrowPhase)"/>
                            
                            <rect x="120" y="60" width="90" height="80" fill="#0ea5e9" opacity="0.2" stroke="#0369a1" stroke-width="2" rx="3"/>
                            <text x="165" y="95" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="11">2. Scanning</text>
                            <text x="165" y="115" text-anchor="middle" font-size="10" fill="#0369a1">Open Ports</text>
                            
                            <path d="M 210 100 L 230 100" stroke="#1e40af" stroke-width="2" marker-end="url(#arrowPhase)"/>
                            
                            <rect x="230" y="60" width="90" height="80" fill="#06b6d4" opacity="0.2" stroke="#0d7377" stroke-width="2" rx="3"/>
                            <text x="275" y="95" text-anchor="middle" font-weight="bold" fill="#0d7377" font-size="11">3. Enumerate</text>
                            <text x="275" y="115" text-anchor="middle" font-size="10" fill="#0d7377">Detailed Info</text>
                            
                            <path d="M 320 100 L 340 100" stroke="#1e40af" stroke-width="2" marker-end="url(#arrowPhase)"/>
                            
                            <rect x="340" y="60" width="90" height="80" fill="#10b981" opacity="0.2" stroke="#047857" stroke-width="2" rx="3"/>
                            <text x="385" y="95" text-anchor="middle" font-weight="bold" fill="#047857" font-size="11">4. Analyze</text>
                            <text x="385" y="115" text-anchor="middle" font-size="10" fill="#047857">Vulnerabilities</text>
                            
                            <path d="M 430 100 L 450 100" stroke="#1e40af" stroke-width="2" marker-end="url(#arrowPhase)"/>
                            
                            <rect x="450" y="60" width="90" height="80" fill="#f59e0b" opacity="0.2" stroke="#b45309" stroke-width="2" rx="3"/>
                            <text x="495" y="95" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="11">5. Exploit</text>
                            <text x="495" y="115" text-anchor="middle" font-size="10" fill="#b45309">Gain Access</text>
                            
                            <path d="M 540 100 L 560 100" stroke="#1e40af" stroke-width="2" marker-end="url(#arrowPhase)"/>
                            
                            <rect x="560" y="60" width="90" height="80" fill="#ec4899" opacity="0.2" stroke="#9d174d" stroke-width="2" rx="3"/>
                            <text x="605" y="95" text-anchor="middle" font-weight="bold" fill="#9d174d" font-size="11">6. Report</text>
                            <text x="605" y="115" text-anchor="middle" font-size="10" fill="#9d174d">Document</text>
                        </svg>

                        <h3>Phases of Penetration Testing</h3>
                        <ol>
                            <li><strong>Reconnaissance:</strong> Gather information about target</li>
                            <li><strong>Scanning:</strong> Identify open ports and services</li>
                            <li><strong>Enumeration:</strong> Collect detailed information</li>
                            <li><strong>Vulnerability Analysis:</strong> Identify weaknesses</li>
                            <li><strong>Exploitation:</strong> Attempt to gain access</li>
                            <li><strong>Post-Exploitation:</strong> Maintain access and gather data</li>
                            <li><strong>Reporting:</strong> Document findings and recommendations</li>
                        </ol>

                        <h3>Reconnaissance Tools</h3>
                        <div class="code-block">
# DNS Enumeration
nslookup example.com
dig example.com

# IP geolocation
whois example.com

# Website information gathering
http://builtwith.com
https://www.shodan.io
                        </div>
                    `,
                    tools: ['Nmap', 'Metasploit', 'Burp Suite', 'Wireshark'],
                    quiz: [
                        {
                            question: 'What is the first phase of penetration testing?',
                            options: ['Exploitation', 'Scanning', 'Reconnaissance', 'Reporting'],
                            correct: 2,
                            explanation: 'Reconnaissance is the first phase where testers gather information about the target system.'
                        }
                    ]
                },
                {
                    id: 'scanning-enumeration',
                    name: 'Scanning & Enumeration',
                    difficulty: 'intermediate',
                    content: `
                        <h2>Port Scanning</h2>
                        <p>Identifying open ports and services running on a system.</p>

                        <h3>Nmap Usage</h3>
                        <div class="code-block">
# Basic scan
nmap example.com

# Scan specific ports
nmap -p 80,443,8080 example.com

# OS detection
nmap -O example.com

# Service version detection
nmap -sV example.com

# Aggressive scan
nmap -A example.com

# Scan all ports
nmap -p- example.com
                        </div>

                        <h3>Service Enumeration</h3>
                        <ul>
                            <li>Banner grabbing to identify services</li>
                            <li>Version detection</li>
                            <li>User enumeration</li>
                            <li>Share enumeration (SMB, NFS)</li>
                        </ul>

                        <h3>Common Ports</h3>
                        <ul>
                            <li>21 - FTP</li>
                            <li>22 - SSH</li>
                            <li>80 - HTTP</li>
                            <li>443 - HTTPS</li>
                            <li>3306 - MySQL</li>
                            <li>5432 - PostgreSQL</li>
                        </ul>
                    `,
                    tools: ['Nmap', 'Netcat', 'Zenmap'],
                    quiz: [
                        {
                            question: 'What does the -sV flag in Nmap do?',
                            options: ['Scans specific ports', 'Detects service versions', 'Performs OS detection', 'Enables verbose output'],
                            correct: 1,
                            explanation: 'The -sV flag performs service version detection, showing what software is running on open ports.'
                        }
                    ]
                },
                {
                    id: 'password-cracking',
                    name: 'Password Cracking & Hashing',
                    difficulty: 'advanced',
                    content: `
                        <h2>Password Security</h2>

                        <h3>Hashing Algorithms</h3>
                        <ul>
                            <li><strong>MD5:</strong> DEPRECATED - easily cracked</li>
                            <li><strong>SHA-1:</strong> DEPRECATED - vulnerable</li>
                            <li><strong>SHA-256:</strong> Still used but not ideal for passwords</li>
                            <li><strong>bcrypt:</strong> Purpose-built for password hashing</li>
                            <li><strong>scrypt:</strong> Memory-hard algorithm</li>
                            <li><strong>Argon2:</strong> Modern, recommended standard</li>
                        </ul>

                        <h3>Password Cracking Methods</h3>
                        <ul>
                            <li><strong>Dictionary Attack:</strong> Using word lists</li>
                            <li><strong>Brute Force:</strong> Trying all combinations</li>
                            <li><strong>Rainbow Tables:</strong> Precomputed hash tables</li>
                            <li><strong>Hybrid Attack:</strong> Combining methods</li>
                        </ul>

                        <h3>Tools for Ethical Testing</h3>
                        <div class="code-block">
# John the Ripper
john --format=bcrypt hashes.txt
john --wordlist=rockyou.txt hashes.txt

# Hashcat (GPU accelerated)
hashcat -m 1000 hashes.txt rockyou.txt

# Check hash type
hash-identifier
                        </div>

                        <h3>Password Best Practices</h3>
                        <ul>
                            <li>Use strong hashing with salt and pepper</li>
                            <li>Enforce minimum password complexity</li>
                            <li>Implement rate limiting</li>
                            <li>Use multi-factor authentication</li>
                        </ul>
                    `,
                    tools: ['John the Ripper', 'Hashcat', 'Hydra', 'Medusa'],
                    quiz: [
                        {
                            question: 'Which hashing algorithm is recommended for passwords?',
                            options: ['MD5', 'SHA-256', 'Argon2', 'Base64'],
                            correct: 2,
                            explanation: 'Argon2 is the modern recommended standard for password hashing due to its resistance to both GPU and ASIC attacks.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'malware-analysis',
            name: 'Malware Analysis',
            icon: '🦠',
            topics: [
                {
                    id: 'malware-types',
                    name: 'Types of Malware',
                    difficulty: 'advanced',
                    content: `
                        <h2>Malware Categories</h2>

                        <h3>Malware Types & Characteristics</h3>
                        <svg viewBox="0 0 700 350" style="width: 100%; max-width: 700px; margin: 20px 0;">
                            <!-- Virus -->
                            <rect x="20" y="20" width="140" height="120" fill="#ef4444" opacity="0.15" stroke="#dc2626" stroke-width="2" rx="5"/>
                            <text x="90" y="45" text-anchor="middle" font-weight="bold" fill="#7f1d1d" font-size="13">🦠 Virus</text>
                            <text x="90" y="65" text-anchor="middle" font-size="11" fill="#7f1d1d">Attaches to files</text>
                            <text x="90" y="80" text-anchor="middle" font-size="11" fill="#7f1d1d">Replicates when</text>
                            <text x="90" y="95" text-anchor="middle" font-size="11" fill="#7f1d1d">host program runs</text>
                            <text x="90" y="130" text-anchor="middle" font-size="10" fill="#7f1d1d">🔴 Requires Host</text>
                            
                            <!-- Worm -->
                            <rect x="190" y="20" width="140" height="120" fill="#f59e0b" opacity="0.15" stroke="#b45309" stroke-width="2" rx="5"/>
                            <text x="260" y="45" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="13">🐛 Worm</text>
                            <text x="260" y="65" text-anchor="middle" font-size="11" fill="#b45309">Self-replicating</text>
                            <text x="260" y="80" text-anchor="middle" font-size="11" fill="#b45309">Spreads via network</text>
                            <text x="260" y="95" text-anchor="middle" font-size="11" fill="#b45309">Independently</text>
                            <text x="260" y="130" text-anchor="middle" font-size="10" fill="#b45309">🟠 No Host Needed</text>
                            
                            <!-- Trojan -->
                            <rect x="360" y="20" width="140" height="120" fill="#ec4899" opacity="0.15" stroke="#9d174d" stroke-width="2" rx="5"/>
                            <text x="430" y="45" text-anchor="middle" font-weight="bold" fill="#9d174d" font-size="13">🎭 Trojan</text>
                            <text x="430" y="65" text-anchor="middle" font-size="11" fill="#9d174d">Disguised as</text>
                            <text x="430" y="80" text-anchor="middle" font-size="11" fill="#9d174d">legitimate software</text>
                            <text x="430" y="95" text-anchor="middle" font-size="11" fill="#9d174d">Opens backdoor</text>
                            <text x="430" y="130" text-anchor="middle" font-size="10" fill="#9d174d">💔 Backdoor Access</text>
                            
                            <!-- Ransomware -->
                            <rect x="530" y="20" width="140" height="120" fill="#8b5cf6" opacity="0.15" stroke="#5b21b6" stroke-width="2" rx="5"/>
                            <text x="600" y="45" text-anchor="middle" font-weight="bold" fill="#5b21b6" font-size="13">🔐 Ransomware</text>
                            <text x="600" y="65" text-anchor="middle" font-size="11" fill="#5b21b6">Encrypts data</text>
                            <text x="600" y="80" text-anchor="middle" font-size="11" fill="#5b21b6">Demands payment</text>
                            <text x="600" y="95" text-anchor="middle" font-size="11" fill="#5b21b6">for decryption</text>
                            <text x="600" y="130" text-anchor="middle" font-size="10" fill="#5b21b6">💰 Data Locked</text>
                            
                            <!-- Spyware -->
                            <rect x="20" y="170" width="140" height="120" fill="#06b6d4" opacity="0.15" stroke="#0d7377" stroke-width="2" rx="5"/>
                            <text x="90" y="195" text-anchor="middle" font-weight="bold" fill="#0d7377" font-size="13">👁️ Spyware</text>
                            <text x="90" y="215" text-anchor="middle" font-size="11" fill="#0d7377">Secretly collects</text>
                            <text x="90" y="230" text-anchor="middle" font-size="11" fill="#0d7377">user information</text>
                            <text x="90" y="245" text-anchor="middle" font-size="11" fill="#0d7377">and reports it</text>
                            <text x="90" y="280" text-anchor="middle" font-size="10" fill="#0d7377">📊 Data Stealing</text>
                            
                            <!-- Rootkit -->
                            <rect x="190" y="170" width="140" height="120" fill="#10b981" opacity="0.15" stroke="#047857" stroke-width="2" rx="5"/>
                            <text x="260" y="195" text-anchor="middle" font-weight="bold" fill="#047857" font-size="13">🔑 Rootkit</text>
                            <text x="260" y="215" text-anchor="middle" font-size="11" fill="#047857">Admin-level access</text>
                            <text x="260" y="230" text-anchor="middle" font-size="11" fill="#047857">Hides itself from</text>
                            <text x="260" y="245" text-anchor="middle" font-size="11" fill="#047857">detection tools</text>
                            <text x="260" y="280" text-anchor="middle" font-size="10" fill="#047857">🚨 Deep Access</text>
                            
                            <!-- Botnet -->
                            <rect x="360" y="170" width="140" height="120" fill="#3b82f6" opacity="0.15" stroke="#1e40af" stroke-width="2" rx="5"/>
                            <text x="430" y="195" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">🤖 Botnet</text>
                            <text x="430" y="215" text-anchor="middle" font-size="11" fill="#1e40af">Network of infected</text>
                            <text x="430" y="230" text-anchor="middle" font-size="11" fill="#1e40af">computers controlled</text>
                            <text x="430" y="245" text-anchor="middle" font-size="11" fill="#1e40af">remotely</text>
                            <text x="430" y="280" text-anchor="middle" font-size="10" fill="#1e40af">🌐 Coordinated</text>
                            
                            <!-- Adware -->
                            <rect x="530" y="170" width="140" height="120" fill="#f59e0b" opacity="0.15" stroke="#b45309" stroke-width="2" rx="5"/>
                            <text x="600" y="195" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="13">📺 Adware</text>
                            <text x="600" y="215" text-anchor="middle" font-size="11" fill="#b45309">Displays unwanted</text>
                            <text x="600" y="230" text-anchor="middle" font-size="11" fill="#b45309">ads and may track</text>
                            <text x="600" y="245" text-anchor="middle" font-size="11" fill="#b45309">user behavior</text>
                            <text x="600" y="280" text-anchor="middle" font-size="10" fill="#b45309">📢 Ads & Tracking</text>
                        </svg>

                        <h3>Virus</h3>
                        <p>Programs that replicate by attaching to other files and programs.</p>

                        <h3>Worms</h3>
                        <p>Self-replicating programs that spread across networks independently.</p>

                        <h3>Trojans</h3>
                        <p>Disguise themselves as legitimate software to enable unauthorized access.</p>

                        <h3>Ransomware</h3>
                        <p>Encrypts victim's data and demands payment for decryption.</p>

                        <h3>Spyware</h3>
                        <p>Secretly collects user information and sends it to attackers.</p>

                        <h3>Adware</h3>
                        <p>Displays unwanted advertisements and may track user behavior.</p>

                        <h3>Rootkits</h3>
                        <p>Provides attacker with administrator-level access while hiding itself.</p>

                        <h3>Botnets</h3>
                        <p>Network of infected computers controlled by attacker for coordinated attacks.</p>
                    `,
                    tools: ['VirusTotal', 'Ghidra', 'IDA Pro'],
                    quiz: [
                        {
                            question: 'What is the main difference between a virus and a worm?',
                            options: ['Viruses are slower', 'Viruses require a host file and worms spread independently', 'Worms are more dangerous', 'No real difference'],
                            correct: 1,
                            explanation: 'Viruses attach to host files to spread, while worms are self-replicating and can spread independently across networks.'
                        }
                    ]
                },
                {
                    id: 'static-dynamic-analysis',
                    name: 'Static & Dynamic Analysis',
                    difficulty: 'advanced',
                    content: `
                        <h2>Malware Analysis Techniques</h2>

                        <h3>Static Analysis</h3>
                        <p>Analyzing malware without executing it.</p>
                        <ul>
                            <li>File analysis and hashing</li>
                            <li>String extraction</li>
                            <li>Binary disassembly</li>
                            <li>PE header analysis</li>
                        </ul>

                        <h3>Dynamic Analysis</h3>
                        <p>Analyzing malware by executing it in a controlled environment.</p>
                        <ul>
                            <li>Behavioral observation</li>
                            <li>API call monitoring</li>
                            <li>Network traffic analysis</li>
                            <li>Registry/file system monitoring</li>
                        </ul>

                        <h3>Analysis Tools</h3>
                        <div class="code-block">
# Strings extraction
strings malware.exe

# File analysis
file malware.exe
md5sum malware.exe

# PE analysis
pefile analyze malware.exe

# API monitoring
API Monitor

# Sandbox analysis
Cuckoo Sandbox
                        </div>
                    `,
                    tools: ['Wireshark', 'Procmon', 'Regshot', 'Cuckoo'],
                    quiz: [
                        {
                            question: 'What is the main advantage of dynamic malware analysis?',
                            options: ['It\'s faster', 'It shows actual behavior when executed', 'It doesn\'t require tools', 'It\'s safer'],
                            correct: 1,
                            explanation: 'Dynamic analysis shows how the malware actually behaves when executed, revealing its true capabilities and intentions.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'cryptography',
            name: 'Cryptography',
            icon: '🔐',
            topics: [
                {
                    id: 'crypto-basics',
                    name: 'Cryptography Basics',
                    difficulty: 'intermediate',
                    content: `
                        <h2>Introduction to Cryptography</h2>

                        <h3>Symmetric vs Asymmetric Encryption</h3>
                        <svg viewBox="0 0 600 280" style="width: 100%; max-width: 600px; margin: 20px 0;">
                            <!-- Symmetric -->
                            <rect x="20" y="20" width="240" height="240" fill="#3b82f6" opacity="0.1" stroke="#1e40af" stroke-width="2" rx="5"/>
                            <text x="140" y="50" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">Symmetric</text>
                            
                            <circle cx="80" cy="100" r="30" fill="#1e40af" opacity="0.3" stroke="#1e40af" stroke-width="2"/>
                            <text x="80" y="110" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="11">Alice</text>
                            
                            <text x="140" y="110" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">🔑 Same Key 🔑</text>
                            
                            <circle cx="200" cy="100" r="30" fill="#1e40af" opacity="0.3" stroke="#1e40af" stroke-width="2"/>
                            <text x="200" y="110" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="11">Bob</text>
                            
                            <text x="140" y="160" text-anchor="middle" fill="#1e40af" font-size="12">Plain: "HELLO"</text>
                            <path d="M 80 130 L 200 130" stroke="#1e40af" stroke-width="2" marker-end="url(#arrow1)"/>
                            <text x="140" y="200" text-anchor="middle" fill="#1e40af" font-size="12">Cipher: "KHOOR"</text>
                            
                            <text x="140" y="245" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">✓ Fast & Efficient</text>
                            
                            <!-- Asymmetric -->
                            <rect x="340" y="20" width="240" height="240" fill="#10b981" opacity="0.1" stroke="#047857" stroke-width="2" rx="5"/>
                            <text x="460" y="50" text-anchor="middle" font-weight="bold" fill="#047857" font-size="14">Asymmetric</text>
                            
                            <circle cx="420" cy="100" r="30" fill="#10b981" opacity="0.3" stroke="#047857" stroke-width="2"/>
                            <text x="420" y="110" text-anchor="middle" font-weight="bold" fill="#047857" font-size="11">Alice</text>
                            
                            <text x="460" y="110" text-anchor="middle" fill="#047857" font-size="10" font-weight="bold">Public Key</text>
                            
                            <circle cx="500" cy="100" r="30" fill="#047857" opacity="0.3" stroke="#047857" stroke-width="2"/>
                            <text x="500" y="110" text-anchor="middle" font-weight="bold" fill="white" font-size="10">Bob</text>
                            <text x="500" y="125" text-anchor="middle" fill="#047857" font-size="9" font-weight="bold">(Private Key)</text>
                            
                            <text x="460" y="160" text-anchor="middle" fill="#047857" font-size="12">Plain: "HELLO"</text>
                            <path d="M 420 130 L 500 130" stroke="#047857" stroke-width="2" marker-end="url(#arrow2)"/>
                            <text x="460" y="200" text-anchor="middle" fill="#047857" font-size="12">Cipher: "ENCRYPTED"</text>
                            
                            <text x="460" y="245" text-anchor="middle" fill="#047857" font-size="11" font-weight="bold">✓ Secure Key Exchange</text>
                            
                            <defs>
                                <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#1e40af"/>
                                </marker>
                                <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#047857"/>
                                </marker>
                            </defs>
                        </svg>

                        <h3>Symmetric Encryption</h3>
                        <p>Uses the same key for both encryption and decryption.</p>
                        <ul>
                            <li><strong>AES (Advanced Encryption Standard):</strong> Modern standard, highly secure</li>
                            <li><strong>DES:</strong> DEPRECATED - too short key (56-bit)</li>
                            <li><strong>3DES:</strong> Applies DES three times</li>
                            <li><strong>Blowfish:</strong> 64-bit block size, fast</li>
                        </ul>

                        <h3>Asymmetric Encryption</h3>
                        <p>Uses different keys for encryption (public) and decryption (private).</p>
                        <ul>
                            <li><strong>RSA:</strong> Based on difficulty of factoring large numbers</li>
                            <li><strong>ECC:</strong> Elliptic Curve Cryptography - more efficient</li>
                            <li><strong>DSA:</strong> Digital Signature Algorithm</li>
                        </ul>

                        <h3>Hash Functions</h3>
                        <ul>
                            <li><strong>MD5:</strong> 128-bit output - DEPRECATED</li>
                            <li><strong>SHA-1:</strong> 160-bit output - DEPRECATED</li>
                            <li><strong>SHA-2:</strong> 256/512-bit output - currently standard</li>
                            <li><strong>SHA-3:</strong> Latest standard - more secure</li>
                        </ul>

                        <div class="code-block">
# OpenSSL encryption examples
openssl enc -aes-256-cbc -in file.txt -out file.enc
openssl enc -aes-256-cbc -d -in file.enc -out file.txt

# Generate RSA keys
openssl genrsa -out private.key 2048
openssl rsa -in private.key -pubout -out public.key
                        </div>
                    `,
                    tools: ['OpenSSL', 'GPG', 'Cryptool'],
                    quiz: [
                        {
                            question: 'What is the main advantage of asymmetric encryption?',
                            options: ['It\'s faster', 'It allows secure key exchange without pre-shared keys', 'It\'s simpler', 'It provides better compression'],
                            correct: 1,
                            explanation: 'Asymmetric encryption allows secure communication and key exchange without needing to pre-share a secret key.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'operating-systems',
            name: 'OS Security',
            icon: '🖥️',
            topics: [
                {
                    id: 'linux-security',
                    name: 'Linux Security Hardening',
                    difficulty: 'intermediate',
                    content: `
                        <h2>Securing Linux Systems</h2>

                        <h3>User Management</h3>
                        <div class="code-block">
# Create new user
useradd -m username

# Set strong password
passwd username

# Configure sudoers
visudo

# Check sudoers
sudo -l
                        </div>

                        <h3>File Permissions</h3>
                        <ul>
                            <li><strong>Read (4):</strong> Permission to read file</li>
                            <li><strong>Write (2):</strong> Permission to modify file</li>
                            <li><strong>Execute (1):</strong> Permission to run file</li>
                        </ul>

                        <h3>Firewall Configuration</h3>
                        <div class="code-block">
# UFW (Ubuntu/Debian)
sudo ufw enable
sudo ufw allow 22
sudo ufw allow 80
sudo ufw status

# iptables (universal)
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -j DROP
                        </div>

                        <h3>System Hardening</h3>
                        <ul>
                            <li>Regular updates and patches</li>
                            <li>Disable unnecessary services</li>
                            <li>Configure SELinux/AppArmor</li>
                            <li>Enable audit logging</li>
                            <li>Use SSH key authentication</li>
                            <li>Disable root login</li>
                        </ul>
                    `,
                    tools: ['UFW', 'iptables', 'fail2ban', 'auditd'],
                    quiz: [
                        {
                            question: 'What does chmod 755 mean?',
                            options: ['Owner: write, Group: none, Others: execute', 'Owner: rwx, Group: rx, Others: rx', 'Owner: rx, Group: rw, Others: rw', 'Owner: execute only'],
                            correct: 1,
                            explanation: 'chmod 755 gives owner read+write+execute (7), group read+execute (5), and others read+execute (5).'
                        }
                    ]
                },
                {
                    id: 'windows-security',
                    name: 'Windows Security',
                    difficulty: 'intermediate',
                    content: `
                        <h2>Windows Security Features</h2>

                        <h3>Windows Defender/Antivirus</h3>
                        <ul>
                            <li>Built-in Windows Defender</li>
                            <li>Real-time protection</li>
                            <li>Regular definition updates</li>
                        </ul>

                        <h3>User Account Control (UAC)</h3>
                        <p>Prompts for admin approval for privileged operations.</p>

                        <h3>Windows Firewall</h3>
                        <ul>
                            <li>Inbound and outbound rules</li>
                            <li>Application-specific rules</li>
                            <li>Profile-based (Domain, Private, Public)</li>
                        </ul>

                        <h3>BitLocker & EFS</h3>
                        <ul>
                            <li><strong>BitLocker:</strong> Full disk encryption</li>
                            <li><strong>EFS:</strong> Encrypting File System</li>
                        </ul>

                        <h3>Security Best Practices</h3>
                        <ul>
                            <li>Enable Windows Update</li>
                            <li>Use strong passwords</li>
                            <li>Enable firewall</li>
                            <li>Regular backups</li>
                            <li>Disable unnecessary services</li>
                        </ul>
                    `,
                    tools: ['Windows Defender', 'Event Viewer', 'Task Scheduler'],
                    quiz: [
                        {
                            question: 'What is BitLocker used for?',
                            options: ['Antivirus protection', 'Full disk encryption', 'Network security', 'Password management'],
                            correct: 1,
                            explanation: 'BitLocker provides full disk encryption to protect data on Windows systems, especially for removable drives.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'incident-response',
            name: 'Incident Response',
            icon: '🚨',
            topics: [
                {
                    id: 'ir-process',
                    name: 'Incident Response Process',
                    difficulty: 'advanced',
                    content: `
                        <h2>Incident Response Lifecycle</h2>

                        <h3>6-Phase IR Process</h3>
                        <svg viewBox="0 0 600 450" style="width: 100%; max-width: 600px; margin: 20px 0;">
                            <!-- Center circle -->
                            <circle cx="300" cy="220" r="150" fill="none" stroke="#1e40af" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <!-- Phase 1 -->
                            <circle cx="450" cy="220" r="40" fill="#3b82f6" opacity="0.3" stroke="#1e40af" stroke-width="2"/>
                            <text x="450" y="215" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">1</text>
                            <text x="450" y="235" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="10">PREP</text>
                            
                            <!-- Phase 2 -->
                            <circle cx="375" cy="75" r="40" fill="#0ea5e9" opacity="0.3" stroke="#0369a1" stroke-width="2"/>
                            <text x="375" y="70" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="12">2</text>
                            <text x="375" y="90" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="10">DETECT</text>
                            
                            <!-- Phase 3 -->
                            <circle cx="225" cy="75" r="40" fill="#06b6d4" opacity="0.3" stroke="#0d7377" stroke-width="2"/>
                            <text x="225" y="70" text-anchor="middle" font-weight="bold" fill="#0d7377" font-size="12">3</text>
                            <text x="225" y="90" text-anchor="middle" font-weight="bold" fill="#0d7377" font-size="10">CONTAIN</text>
                            
                            <!-- Phase 4 -->
                            <circle cx="150" cy="220" r="40" fill="#10b981" opacity="0.3" stroke="#047857" stroke-width="2"/>
                            <text x="150" y="215" text-anchor="middle" font-weight="bold" fill="#047857" font-size="12">4</text>
                            <text x="150" y="235" text-anchor="middle" font-weight="bold" fill="#047857" font-size="10">ERADICATE</text>
                            
                            <!-- Phase 5 -->
                            <circle cx="225" cy="365" r="40" fill="#f59e0b" opacity="0.3" stroke="#b45309" stroke-width="2"/>
                            <text x="225" y="360" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="12">5</text>
                            <text x="225" y="380" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="10">RECOVER</text>
                            
                            <!-- Phase 6 -->
                            <circle cx="375" cy="365" r="40" fill="#ec4899" opacity="0.3" stroke="#9d174d" stroke-width="2"/>
                            <text x="375" y="360" text-anchor="middle" font-weight="bold" fill="#9d174d" font-size="12">6</text>
                            <text x="375" y="380" text-anchor="middle" font-weight="bold" fill="#9d174d" font-size="10">LEARN</text>
                        </svg>

                        <h3>1. Preparation</h3>
                        <ul>
                            <li>Establish IR team</li>
                            <li>Create incident response plan</li>
                            <li>Deploy monitoring tools</li>
                            <li>Document procedures</li>
                        </ul>

                        <h3>2. Detection & Analysis</h3>
                        <ul>
                            <li>Identify the incident</li>
                            <li>Analyze scope and severity</li>
                            <li>Determine attack vector</li>
                            <li>Identify affected systems</li>
                        </ul>

                        <h3>3. Containment</h3>
                        <ul>
                            <li><strong>Short-term:</strong> Stop immediate impact</li>
                            <li><strong>Long-term:</strong> Implement temporary fixes</li>
                        </ul>

                        <h3>4. Eradication</h3>
                        <ul>
                            <li>Remove malware/attacker access</li>
                            <li>Patch vulnerabilities</li>
                            <li>Restore systems</li>
                            <li>Verify eradication</li>
                        </ul>

                        <h3>5. Recovery</h3>
                        <ul>
                            <li>Restore systems to normal operation</li>
                            <li>Monitor for re-infection</li>
                            <li>Implement hardening measures</li>
                        </ul>

                        <h3>6. Post-Incident Activity</h3>
                        <ul>
                            <li>Conduct lessons learned</li>
                            <li>Update policies and procedures</li>
                            <li>Improve detection capabilities</li>
                        </ul>
                    `,
                    tools: ['Splunk', 'ELK Stack', 'YARA', 'Volatility'],
                    quiz: [
                        {
                            question: 'What is the first step in incident response?',
                            options: ['Containment', 'Detection & Analysis', 'Preparation', 'Recovery'],
                            correct: 2,
                            explanation: 'Preparation is the first step, establishing the IR team, tools, and procedures before an incident occurs.'
                        }
                    ]
                }
            ]
        }
    ]
};

// Flatten all lessons for easier navigation
function getAllLessons() {
    let lessons = [];
    let lessonId = 0;
    curriculumData.categories.forEach(category => {
        category.topics.forEach(topic => {
            lessons.push({
                ...topic,
                category_id: category.id,
                category_name: category.name,
                category_icon: category.icon,
                lesson_index: lessonId++
            });
        });
    });
    return lessons;
}

const allLessons = getAllLessons();
