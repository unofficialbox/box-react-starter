import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Layout from '../Layout';
import { ContentExplorer } from 'box-ui-elements';
import BoxAnnotations from 'box-annotations';
import { ScaleLoader } from 'react-spinners';
import { THEME_COLOR, EXPRESS_SERVER_HOST } from '../Constants';


export default ({ folderId }) => {
    const [token, setToken] = useState(null);
    const [rootFolderId, setRootFolderId] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const boxAnnotations = new BoxAnnotations();

    useEffect(() => {
        const fetchToken = async () => {
            setIsLoading(true);

            if(!folderId) {
                folderId = '0';
            }

            setRootFolderId(folderId);       
            const result = await axios.get(`${EXPRESS_SERVER_HOST}/box/explorer/token-downscope/${folderId}`);            

            setToken(result.data.accessToken);
            setIsLoading(false);
        }
        fetchToken();
    }, []);
    if(token) {
        console.log('Loading UI Element...');

        return (
            <Layout>
                <div className="elements">
                        <ContentExplorer
                            logoUrl={""}
                            rootFolderId={rootFolderId}
                            token={token}
                            language={"en_US"}
                            contentPreviewProps={{
                                boxAnnotations: boxAnnotations,
                                showAnnotations: true,
                                showDownload: true,
                                enableAnnotationsDiscoverability: true,
                                enableAnnotationsImageDiscoverability: true,
                                showAnnotationsControls: true,
                                showAnnotationsDrawingCreate: true,
                                enableThumbnailsSidebar: true,
                                contentSidebarProps: {
                                    detailsSidebarProps: {
                                        hasProperties: true,
                                        hasNotices: true,
                                        hasAccessStats: true,
                                        hasClassification: true,
                                        hasRetentionPolicy: true,
                                    },
                                    hasActivityFeed: true,
                                    hasMetadata: true,
                                    hasSkills: true,
                                    hasVersions: true,
                                    features: {
                                        activityFeed: {
                                            annotations: {
                                                enabled: true
                                            },
                                            filter: {
                                                enabled: true
                                            },
                                            newThreadedReplies: {
                                                enabled: true
                                            }
                                        }
                                    },
                                }
                            }}
                        />
                </div>
            </Layout>
        );
    }
    else {
        return(
            <Layout>
                <div className="elements">
                    <div className="spinner">
                        <ScaleLoader 
                            color={THEME_COLOR}
                            loading={isLoading}
                        />
                    </div>                
                </div>
            </Layout>
        );
    }
};
