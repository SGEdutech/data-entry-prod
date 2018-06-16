const express = require('express');
const path = require('path');
const PORT = require('./config').SERVER.PORT;
const storageEngion = require('./storage-engine');
require('./database/connection');

const routes = {
    blog: require('./database/api/blog'),
    event: require('./database/api/event'),
    school: require('./database/api/school'),
    tuition: require('./database/api/tuition'),
    user: require('./database/api/user')
};

const app = express();

app.get('/', (req, res) => res.redirect('./app/maintenance.html'))

app.use('/app', express.static(path.join(__dirname, 'public')));

app.get('/school', (req, res) => {
    res.redirect('./app/school.html');
});

app.get('/event', (req, res) => {
    res.redirect('./app/event.html');
});

app.get('/tuition', (req, res) => {
    res.redirect('./app/tuition.html');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/blog', routes.blog);
app.use('/event', storageEngion.eventCoverPicMiddleware, filterEmptyObjects, routes.event);
app.use('/school', storageEngion.schoolCoverPicMiddleware, filterEmptyObjects, routes.school);
app.use('/tuition', storageEngion.tuitionCoverPicMiddleware, filterEmptyObjects, routes.tuition);
app.use('/user', routes.user);

app.listen(PORT, () => {
    console.log(`Yo dawg! Server's at http://localhost:${PORT}`);
});

function filterEmptyObjects(req, res, next) {
    Object.keys(req.body).forEach(element => {
        if (req.body[element] === '') {
            delete req.body[element];
        }
    });
    next();
}