const data = [
    {
id: 942,
question: 'How do you create secrets in Kubernetes?',
description: null,
answers: {
answer_a: 'kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt',
answer_b: 'kubectl generate secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt',
answer_c: null,
answer_d: null,
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'true',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: null,
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'DevOps',
difficulty: 'Medium'
},
{
id: 847,
question: 'How to list all the docker containers are running with container details.',
description: null,
answers: {
answer_a: '$ docker ls',
answer_b: '$ docker ps',
answer_c: '$ docker details',
answer_d: null,
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'true',
answer_c_correct: 'false',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Docker',
difficulty: 'Medium'
},
{
id: 885,
question: 'Is there a hard limit for the number of containers that you can run and if there is which is number of total containers that you can run?',
description: null,
answers: {
answer_a: 'Even though there is no limit of containers that can run on Docker, hardware limitations come into the picture.',
answer_b: '5',
answer_c: '2',
answer_d: null,
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'true',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Docker',
difficulty: 'Medium'
},
{
id: 1073,
question: 'What is the default priority of the swap partition',
description: null,
answers: {
answer_a: '0',
answer_b: '-1',
answer_c: '10',
answer_d: '1',
answer_e: 'There are no priorities for swap',
answer_f: '100'
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'true',
answer_c_correct: 'false',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: null,
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Linux',
difficulty: 'Medium'
},
{
id: 343,
question: 'What is the Ping of Death?',
description: null,
answers: {
answer_a: 'The Ping of Death is an occurrence when sending packets are reassembled, are too large for the system to understand.',
answer_b: 'The Ping of Death is capturing and deciphering traffic on a network.',
answer_c: 'The Ping of Death can be set in wordpress under admin settings.',
answer_d: null,
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'true',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'CMS',
difficulty: 'Medium'
},
{
id: 28,
question: 'Where is Linux user list stored?',
description: null,
answers: {
answer_a: '/etc/users',
answer_b: '/usr/local/users',
answer_c: 'By running the command show users',
answer_d: 'None of the above.',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'true',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_d',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Linux',
difficulty: 'Medium'
},
{
id: 476,
question: 'What should be the first tag in any HTML Document?',
description: null,
answers: {
answer_a: '<html>',
answer_b: '<!doctype html>',
answer_c: '<title>',
answer_d: '<head>',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'true',
answer_c_correct: 'false',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Code',
difficulty: 'Easy'
},
{
id: 73,
question: 'What is the correct way to add 1 to the $count variable?',
description: null,
answers: {
answer_a: '++count',
answer_b: 'count++;',
answer_c: '$count =+1',
answer_d: '$count++;',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'true',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_d',
explanation: null,
tip: null,
tags: [ [Object] ],
category: '',
difficulty: 'Medium'
},
{
id: 608,
question: 'Which the the currently accepted best practice method for hashing passwords to hash passwords?',
description: "Using bcrypt is the currently accepted best practice for hashing passwords, but a large number of developers still use older and weaker algorithms like MD5 and SHA1. Some developers don't even use a salt while hashing.",
answers: {
answer_a: 'bcrypt()',
answer_b: 'md5()',
answer_c: 'hash()',
answer_d: 'encode()',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'true',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Code',
difficulty: 'Medium'
},
{
id: 601,
question: "If the variable $var1 is set to 10 and the $var2 is set to the character var1, what's the value of $$var2?",
description: null,
answers: {
answer_a: '$$var2 contains the value 1.',
answer_b: '$$var2 contains the value 5',
answer_c: '$$var2 contains the value 20',
answer_d: '$$var2 contains the value 10.',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'true',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Code',
difficulty: 'Easy'
},
{
id: 714,
question: 'What could be used to program additional authentication logic besides available authenticator modules?',
description: null,
answers: {
answer_a: 'Kube Vault',
answer_b: 'Authentication Proxy',
answer_c: 'Kube Auth Service',
answer_d: 'Kubernetes Role Manager',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'true',
answer_c_correct: 'false',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: 'Using Authentication Proxy, the API server can extract the information it needs about the user’s identity using the HTTP headers that you specify. Let’s have a quick example to demonstrate this concept:',
tip: null,
tags: [ [Object] ],
category: 'Linux',
difficulty: 'Easy'
},
{
id: 315,
question: 'Which color is the official color of the Wordpress.org logo?',
description: null,
answers: {
answer_a: 'Yellow',
answer_b: 'Purple',
answer_c: 'Dark grey',
answer_d: 'White',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'true',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'CMS',
difficulty: 'Easy'
},
{
id: 69,
question: 'What is the correct way to create a function in PHP?',
description: null,
answers: {
answer_a: 'function myFunction()',
answer_b: 'new_function myFunction()',
answer_c: 'create myFunction()',
answer_d: 'create new_function myFunction()',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'true',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: '',
difficulty: 'Medium'
},
{
id: 729,
question: 'How to list pods sorted by Restart Count in Kubernetes?',
description: null,
answers: {
answer_a: "kubectl get pods --sort-by='.status.restartCount'",
answer_b: "kubectl get pods --sort='.status.containerStatuses[0].restartCount'",
answer_c: 'kubectl get pods by restartCount',
answer_d: "kubectl get pods --sort-by='.status.containerStatuses[0].restartCount'",
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'true',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Linux',
difficulty: 'Medium'
},
{
id: 34,
question: 'Which command is used to create file archives in Linux?',
description: null,
answers: {
answer_a: 'arc',
answer_b: 'zip',
answer_c: 'ps',
answer_d: 'tar',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'true',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_d',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Linux',
difficulty: 'Easy'
},
{
id: 941,
question: 'What will happen while adding new API to Kubernetes?',
description: null,
answers: {
answer_a: 'Adding a new API will block the previous API',
answer_b: 'Adding a new API will remove some clusters',
answer_c: 'Adding a new API will improve the functioning ability of Kubernetes',
answer_d: null,
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'true',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: null,
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Docker',
difficulty: 'Medium'
},
{
id: 526,
question: 'When would you use path along with file name of a picture in an IMG tag?',
description: null,
answers: {
answer_a: 'path is optional and not necessary',
answer_b: 'when image file and html file both are on same location d.',
answer_c: 'path is always necessary when inserting image',
answer_d: 'when the location of image file and html file are different',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'true',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Code',
difficulty: 'Medium'
},
{
id: 718,
question: 'Which command is used to create a Kubernetes service?',
description: null,
answers: {
answer_a: 'kubectl set service',
answer_b: 'kubectl create service',
answer_c: 'kubectl deploy service',
answer_d: 'kubectl expose',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'true',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'Linux',
difficulty: 'Easy'
},
{
id: 902,
question: 'To create a new deployment in kubernetes, use the command',
description: null,
answers: {
answer_a: 'kubernetes set deployment',
answer_b: 'kubernetes get deployment',
answer_c: 'kubectl run',
answer_d: 'kubectl deploy',
answer_e: null,
answer_f: null
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'true',
answer_d_correct: 'false',
answer_e_correct: 'false',
answer_f_correct: 'false'
},
correct_answer: null,
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'DevOps',
difficulty: 'Easy'
},
{
id: 324,
question: "You have lost access to your admin area and can't recover it with email. What do you do?",
description: null,
answers: {
answer_a: 'Delete your themes folder.',
answer_b: 'Reinstall Wordpress.',
answer_c: 'Install a plugin to recover your password.',
answer_d: 'Add a new user with admin privileges in MySQL.',
answer_e: 'Reset the password of your user through MySQL.',
answer_f: 'Register a new user and set it as an administrator via your panel.'
},
multiple_correct_answers: 'false',
correct_answers: {
answer_a_correct: 'false',
answer_b_correct: 'false',
answer_c_correct: 'false',
answer_d_correct: 'true',
answer_e_correct: 'true',
answer_f_correct: 'false'
},
correct_answer: 'answer_a',
explanation: null,
tip: null,
tags: [ [Object] ],
category: 'CMS',
difficulty: 'Easy'
}
]

module.exports = {
    data
}