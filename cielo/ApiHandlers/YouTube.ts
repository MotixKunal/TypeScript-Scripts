import { google } from 'googleapis';

export default class YouTube {
    private readonly __ApiKey!: string;

    constructor(apiKey: string) { 
        //registering api key
        this.__ApiKey = apiKey;
    };

    /**
     * Search the youtube api with video id
     * @param {string} videoId
     * @returns Promise<youtube_v3.Schema$Video>
     */

    public async searchID(videoId: string) {
        return await google.youtube("v3").videos.list({
            key: this.__ApiKey,
            part: ['snippet', 'id', 'topicDetails', 'statistics', 'status', 'contentDetails'],
            id: [videoId]
        }).then(response => response.data.items[0])
    }

    /**
     * Search the youtube api with video id
     * @param {string} videolink
     * @returns Promise<youtube_v3.Schema$Video>
    */

    public async searchLink(videoLink: string) {
        let { id } = require('get-video-id')(videoLink);

        return await google.youtube("v3").videos.list({
            key: this.__ApiKey,
            id: id,
            part: ['snippet', 'id', 'topicDetails', 'statistics', 'status', 'contentDetails']
        }).then(response => response.data.items[0])
    }
}