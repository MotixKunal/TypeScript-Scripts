Simple Api Handlers for cielo(a discord bot.)

Youtube:

Video Search:

Search via video id:

  ```ts
  import YouTube from '@ApiHandlers/YouTube';

  let youtube = new YouTube(/* api key here */);
  
  youtube.searchVideoID(/* video id here */).then(response => {
    console.log(response);
  });
  ```
  
Search via video link:

  ```ts
  import YouTube from '@ApiHandlers/YouTube';

  let youtube = new YouTube(/* api key here */);
  
  youtube.searchVideoLink(/* video id here */).then(response => {
    console.log(response);
  });
  ```
 
For more information about response check: https://developers.google.com/youtube/v3/docs/videos#resource
 
(More methods coming soon.)
  
