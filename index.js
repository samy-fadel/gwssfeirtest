const {Auth, google} = require('googleapis');


const main = async () => {
    const auth = new Auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/admin.directory.group",
    });
    const client = await auth.getClient();

    // Obtain a new drive client, making sure you pass along the auth client
    const admin = google.admin({ version: 'directory_v1', auth: client });


    const groups = await admin.groups.list({
      domain: "samyfadel.altostrat.com"
    });
    console.log(groups.data.groups);
}

main();