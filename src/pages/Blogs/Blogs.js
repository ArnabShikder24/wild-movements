import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5 py-5'>
            <div className='mb-4'>
                <h2 className='hover-underline-animation mb-3'>1. Difference between authentication and authorization</h2>
                <h4>Authentication: Authentication verifies who the user is. Authentication works through password, one-time pins and other information provided or entered by the user. Authentication is the first step of a good identity and access management process</h4>
                <h4>Authorization: Authorization determines what resources a user can access. Authorization work through setting that are implemented and maintaqined by organization. Authorization always takes place after authentication.</h4>
            </div>
            <div className="my-5">
                <h2 className='hover-underline-animation mb-3'>2. Why are you using firebase? What other options do you have to implement? authentication?</h2>
                <h4>We use firebase because it is manages all data real-time in the database. it is very fast to data exchange and load. and firebase is easy and quick.</h4>
                <h4>Alternative: Back4app is a reliable Firebase alternative, more firebase alternative is  Parse, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB,Flutter and more etc.</h4>
            </div>
            <div className="mb-4">
                <h2 className='hover-underline-animation mb-3'>3. What other services does firebase provide other than authentication?</h2>
                <h4>There are many services whice firebase provides. Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config etc. it can help in developing. firebase hoisting we can use easly and deploy our sites to firebase.</h4>
            </div>
        </div>
    );
};

export default Blogs;