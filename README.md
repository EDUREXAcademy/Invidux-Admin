# Invidux Admin
Invidux is a start-up investment platform for fractional ownership in real estate. We are a property technology company leveraging blockchain and emerging technologies to solve challenges of the real estate market. Invidux provides secured and high-yielding alternative investment products for Nigerians. Invidux offers an easy entry into the world of real estate investment, plus exit liquidity and transparent distribution of regular returns.

Invidux is committed to making real estate investment easier and more accessible to all. The platform is being developed to empower everyone to build wealth through fractional ownership of real estate. Invidux allows investors around the world invest in the Nigerian real estate market without the hassle of managing the property. Invidux's investors earn monthly returns starting immediately after the end of any funding round.

Invidux collaborates with notable partners to deliver excellent service and secure our investors. 

## Clone & Install Invidux Application
* Clone the repository
```javascript
git clone https://github.com/EDUREXAcademy/Invidux-Admin.git
```
* Change directory into the the project folder
```javascript
cd Invidux 
```
* Install all the dependency
```javascript
pnpm install 
```
* You can go ahead to make changes to the main branch or checkout to your own branch before making changes.
```javascript
git checkout -b name_of_new_branch
```
* Start up the react application 
```react
pnpm run dev
```
* Copy and paste the the hosted local port from your terminal (e.g http://localhost:3000/) to your browser to view the home page.

## File Structure
Just like every other nextjs app we have the node_modules, Public, and the src folders but the src folder is where all the works are been done. Hence, here is how the src folder is been structured.

## The src folder
The src folder contains the following folders.  


### 1. api
The api folder is where we define our base api url in the TokenHoldersAxios.ts file, the type definition in the types.ts file and the index.tsx for the api calls.
### 2. assets
We have three major folder here fonts for all variation of the Satoshi fonts, icons for all our icons in .svg format, and images the contains all our application images.
### 3. components
The component folder contails all reusable component arranged in their respective folders.
 - The reusable component contain components that are reusables across the entire application. Components like button, form input etc.
### 4. hooks
The folder contain custom hooks for api calls for but mutation and queries.
### 5. app
This contain all the pages in the application. in the admin folder is the authentication pages and the user dashboard pages.

### 6. store 
the store folder is for storing global state in zustand. Bassically the user state and the request loading state.
## 7. lib
The folder contains utility datas

## The src files
The src folder also contains files like:
* App.tsx - The components where our application resides
* index.css - The css file where our styles are defined and is been used with tailwind css
* main.tsx - The root of our Appliction


