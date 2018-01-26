# digicard

Install Dependencies:

1. Install npm and nodejs

nodejs: https://nodejs.org/en/
node (update): `npm install npm@latest -g`

To check if successful, `npm -v`, `node -v`.

2. Install electron
global install: `npm install electron -g`

3. Install git
If in Linux-based systems:
Type `sudo add-apt-repository ppa:git-core/ppa`
Type `sudo apt-get update`
Type `sudo apt-get install -y git`

Otherwise:
Follow steps here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Setup:

1. Create folder named "CS 192" (or any other name)
2. Open cmd/terminal in ~/CS 192 then type `git clone https://github.com/cadaroya/digicard.git`
3. Type `npm install` to install dependencies.
4. Type `npm start` to start the desktop app.
5. For more information, watch this tutorial: https://www.youtube.com/watch?v=kN1Czs0m1SU&t=327s

Additional:
1. If `npm start` doesn't work, try running `npm install electron --save` to install electron locally in the directory. (not sure if already included in git download)

2. For development, I suggest using visual code as text editor https://code.visualstudio.com/ because it has git functionalities integrated into it.



