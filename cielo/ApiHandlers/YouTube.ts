import { google } from 'googleapis';
const getVideoId = require('get-video-id')
const getChannelId = require('get-youtube-channel-id')

export default class YouTube {
    private readonly __ApiKey!: string;

    constructor(apiKey: string) { 
        //registering api key
        this.__ApiKey = apiKey;
    };

    /**
     * Search the youtube api for a video with video id/link
     * @param {string} videoLinkorId
     * @returns Promise<youtube_v3.Schema$Video>
    */

    public async searchVideo(videoLinkorId: string) {
        let id = getVideoId(videoLinkorId).id || videoLinkorId;

        return await google.youtube("v3").videos.list({
            key: this.__ApiKey,
            id: [id],
            part: ['snippet', 'id', 'topicDetails', 'statistics', 'status', 'contentDetails']
        }).then(response => response.data.items[0])
    }

    /**
     * Search the youtube api for a channel with channel id/link
     * @param {string} idorlink 
     * @returns Promise<youtube_v3.Schema$Channel>
     */

    public async searchChannel(idorlink: string) {
        let id = await getChannelId(idorlink).then((response: any) => response.id) || idorlink;

        return await google.youtube("v3").channels.list({
            key: this.__ApiKey,
            id: id,
            part: ['contentDetails', 'contentOwnerDetails', 'id', 'snippet', 'statistics', 'status', 'topicDetails']
        }).then(response => response.data.items[0])
    }
}
