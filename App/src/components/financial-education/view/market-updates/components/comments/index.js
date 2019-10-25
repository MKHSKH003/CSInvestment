import React from 'react';
import { Modal } from 'react-native';

import useApi from '../../../../../../shared/components/react-use-api';
import { marketUpdatesApi } from '../../../../../../api';
import { marketUpdatesBaseUrl } from '../../../../../../shared/constants/api-selectors'
import { onError } from '../../../../../../shared/components/notifications';
import Comments from './comments';

export default Container = ({
    commentSectionVisible,
    toggleCommentSection,
    commentProps
}) => {
    const sendComment = useApi({
        action: comment => marketUpdatesApi.sendComment(marketUpdatesBaseUrl, comment),
        initialValue: [],
        defer: true,
        onError: e => onError(e.message)
    }, []);

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={commentSectionVisible}
        >
            <Comments
                sendComment={sendComment.execute}
                toggleCommentSection={toggleCommentSection}
                commentProps={commentProps}
            />
        </Modal>
    );
};
