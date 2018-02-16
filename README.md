# digicard

## Install necessary software:

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

If not linux: Follow steps here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Setup:

1. Create folder named "CS 192" (or any other name)
2. Open cmd/terminal in ~/CS 192 then type `git clone https://github.com/cadaroya/digicard.git`
3. Type `npm install` to install dependencies.
4. Type `npm run dev` to start vue and express server.
5. Type `npm run app` to run electron.
5. For more information, watch this tutorial: https://www.youtube.com/watch?v=kN1Czs0m1SU&t=327s

## Setup 2: Student Interface
1. Navigate to "clientStudent" folder
2. `npm install` dependencies, then `npm run dev` to start vue server
3. Go to `http://localhost:8000/` in any browser.
4. Make sure express server is running.

### Additional:
1. For development, I suggest using visual code as text editor https://code.visualstudio.com/ because it has git functionalities integrated into it.

v-0.0.2

