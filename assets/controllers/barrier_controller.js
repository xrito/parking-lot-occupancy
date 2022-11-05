import {Controller} from '@hotwired/stimulus';
import videojs from 'video.js';
import "video.js/dist/video-js.css";
export default class extends Controller {
    static targets = ['video']

    constructor(context) {
        super(context);
        videojs(this.videoTarget);
    }

}
