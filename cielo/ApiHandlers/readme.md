Simple Api Handlers for cielo(a discord bot.)

Youtube:

Video Search Examples:

Search via video id:

  ```ts
  import YouTube from '@ApiHandlers/YouTube';

  let youtube = new YouTube(/* api key here */);
  
  youtube.searchVideoID('UFfxYgpHRg').then(response => {
    console.log(response.snippet.publishedAt); 2021-03-28T19:00:45Z
  });
  ```
  
Search via video link:

  ```ts
  import YouTube from '@ApiHandlers/YouTube';

  let youtube = new YouTube(/* api key here */);
  
  youtube.searchVideoLink('https://www.youtube.com/watch?v=TUFfxYgpHRg').then(response => {
    console.log(response.snippet.title); Why I Left Twitter
  });
  ```
 
For more information about response check: https://developers.google.com/youtube/v3/docs/videos#resource
 
(More methods coming soon.)
  
