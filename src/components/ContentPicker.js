import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout';
import { ContentPicker } from 'box-ui-elements';
import { ScaleLoader } from 'react-spinners';
import { THEME_COLOR, EXPRESS_SERVER_HOST } from '../Constants';


export default ({ folderId }) => {
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchToken = async () => {
            setIsLoading(true);

            if(!folderId) {
                folderId = '0';
            }
            
            const result = await axios.get(`${EXPRESS_SERVER_HOST}/box/picker/token-downscope/${folderId}`);
            setToken(result.data.accessToken);
            setIsLoading(false);
        }
        fetchToken();
    }, []);
    if(token) {
        return (
            <Layout>
                <div className="elements">
                <ContentPicker
                    logoUrl={""}
                    currentFolderId={folderId}
                    token={token}
                    canSetShareAccess={true}
                    canUpload={true}
                    canCreateNewFolder={true}
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
