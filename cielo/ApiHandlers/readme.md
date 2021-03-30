## Simple Api Handlers for cielo.

# Youtube:

# Search for a video with video id/link:

  ```ts
  import YouTube from '@ApiHandlers/YouTube';

  let youtube = new YouTube(/* api key here */);
  
  youtube.searchVideo('UFfxYgpHRg').then(response => {
    console.log(response.snippet.publishedAt); // 2021-03-28T19:00:45Z
  });
  ```
  ```ts
  import YouTube from '@ApiHandlers/YouTube';

  let youtube = new YouTube(/* api key here */);
  
  youtube.searchVideo('https://www.youtube.com/watch?v=TUFfxYgpHRg').then(response => {
    console.log(response.snippet.title); // Why I Left Twitter
  });
  ```
 
For more information about response check: https://developers.google.com/youtube/v3/docs/videos#resource

# Search for a channel with channel id/link
 
(More methods coming soon.)
  
