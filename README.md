This repository contains a CRUD (Create, Read, Update, Delete) stationery management system built with a combination of frontend and backend technologies.

<h3>Project Structure</h3>
The project is divided into two main parts:

Frontend: Built with Ionic and React to provide a user-friendly interface for managing stationery items, optimized for mobile view.
Backend: Built with ExpressJS and MongoDB to handle data persistence and API functionalities.

<h3>Prerequisites</h3>
Before running this application, you will need to run the ```npm install``` command to install each dependencies

<h3>Usage</h3>
Once the application is running, you can access the frontend interface and manage your stationery items. The functionalities should include:
<ul>
<li>Viewing a list of existing stationery items </li> <br/>
<img src="https://github.com/EnricoAdi/ionic-simple-stationery-crud/blob/master/docs/home.png" width=250/> <br/>
<li>Adding new stationery items </li> <br/>
<img src="https://github.com/EnricoAdi/ionic-simple-stationery-crud/blob/master/docs/add.png" width=250/><br/>
<li>Edit existing stationery items </li> <br/>
<img src="https://github.com/EnricoAdi/ionic-simple-stationery-crud/blob/master/docs/edit.png" width=250/><br/>
<li>Deleting stationery items </li>
</ul>


<h3>Deployment With Kubernetes</h3>
For development, dont forget to register the domain
127.0.0.1 stationery-backend.enrico.local

For debugging mongodb service (execute shell inside the mongo pod)
kubectl exec -it mongodb-0 -- mongosh "mongodb://root:password@mongodb-0.mongodb:27017/?authSource=admin"