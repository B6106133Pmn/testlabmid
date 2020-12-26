/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API Playlist Vidoe
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EntPlaylistVideo,
    EntPlaylistVideoFromJSON,
    EntPlaylistVideoFromJSONTyped,
    EntPlaylistVideoToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntResolutionEdges
 */
export interface EntResolutionEdges {
    /**
     * PlaylistVideos holds the value of the playlist_videos edge.
     * @type {Array<EntPlaylistVideo>}
     * @memberof EntResolutionEdges
     */
    playlistVideos?: Array<EntPlaylistVideo>;
}

export function EntResolutionEdgesFromJSON(json: any): EntResolutionEdges {
    return EntResolutionEdgesFromJSONTyped(json, false);
}

export function EntResolutionEdgesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntResolutionEdges {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'playlistVideos': !exists(json, 'playlistVideos') ? undefined : ((json['playlistVideos'] as Array<any>).map(EntPlaylistVideoFromJSON)),
    };
}

export function EntResolutionEdgesToJSON(value?: EntResolutionEdges | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'playlistVideos': value.playlistVideos === undefined ? undefined : ((value.playlistVideos as Array<any>).map(EntPlaylistVideoToJSON)),
    };
}

