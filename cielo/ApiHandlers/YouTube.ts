import { google } from 'googleapis';
const getVideoId = require('get-video-id')

export default class YouTube {
    private readonly __ApiKey!: string;

    constructor(apiKey: string) { 
        //registering api key
        this.__ApiKey = apiKey;
    };

    /**
     * Search the youtube api with video id/link
     * @param {string} videoLinkorId
     * @returns Promise<youtube_v3.Schema$Video>
    */

    public searchVideoLink(videoLinkorId: string) {
        let id = getVideoId(videoLinkorId).id || videoLinkorId;

        return google.youtube("v3").videos.list({
            key: this.__ApiKey,
            id: [id],
            part: ['snippet', 'id', 'topicDetails', 'statistics', 'status', 'contentDetails']
        }).then(response => response.data.items[0])
    }

    
}
