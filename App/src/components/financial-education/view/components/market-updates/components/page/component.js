import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import FitImage from 'react-native-fit-image';

import Header from '../../../../../../header/components/page/container';
import PostMarketUpdate from '../post-market-updates';

export default Feeds = ({
    marketUpdates,
    loading,
    onPostMarketUpdates,
    currentUser,
    devices,
    onDeleteMarketUpdate,
    onPostLike
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [deletePostId, setDeletePostId] = useState(0);

    const deletePost = id => {
        setDeleteModalVisible(false)
        onDeleteMarketUpdate(id);
    }

    const openDeleteModal = id => {
        setDeletePostId(id);
        setDeleteModalVisible(true)
    }

    const renderTopSection = (post) => {
        return (
            <TouchableOpacity onPress={() => currentUser.IsAdmin == 1 && openDeleteModal(post.Id)}>
                <View style={styles.row}>
                    <Image source={{ uri: post.Student ? post.Student.Image : '' }} style={styles.pic} />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{post.Student ? post.Student.Name : ''}</Text>
                            <Text style={styles.mblTxt}>{currentUser.IsAdmin == 1 && 'X'}</Text>
                        </View>
                        <View style={styles.msgContainer}>
                            <Text style={styles.msgTxt}>{[post.Datetime]}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const renderMiddleSection = (post) => {
        return (
            <TouchableOpacity >
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>{post.Caption}</Text>
                    </View>
                    <FitImage
                        indicator={true} // disable loading indicator
                        indicatorColor="red" // react native colors or color codes like #919191
                        indicatorSize="large" // (small | large) or integer
                        source={{ uri: post.Avatar }}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const renderBottomSection = (post) => {
        return (
            <TouchableOpacity >
                <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton} onPress={() => onPostLike(post.Id, currentUser, devices)}>
                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/android/75/e74c3c/hearts.png' }} />
                                <Text style={styles.socialBarLabel}>{post.PostLikes.length}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                {/*<Image style={styles.icon} source={{ uri: 'https://png.icons8.com/metro/75/3498db/administrator-male.png' }} />
                                <Text rkType='primary4 hintColor' style={styles.socialBarLabel}>13</Text>*/}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png' }} />
                                <Text style={styles.socialBarLabel}>0</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={{ flex: 1 }} >
            <Header props={this.props} title={'Market Update Feeds'} />
            {!loading &&
                <TouchableOpacity
                    style={styles.postButton}
                    onPress={() => setModalVisible(true)}
                    activeOpacity={1}>
                    <Text style={styles.text}>Post</Text>
                </TouchableOpacity>
            }

            <PostMarketUpdate
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                currentUser={currentUser}
                devices={devices}
                onPostMarketUpdates={onPostMarketUpdates}
            />
            {marketUpdates.map((post, key) =>
                <TouchableOpacity key={key} onPress={() => console.log('currentUser.IsAdmin == 1 && openDeleteModal(post.Id)')}>
                    {renderTopSection(post)}
                    {renderMiddleSection(post)}
                    {renderBottomSection(post)}
                </TouchableOpacity>
            )}

            <Modal
                animationType={'fade'}
                transparent={true}
                onRequestClose={() => setDeleteModalVisible(false)}
                visible={deleteModalVisible}>

                <View style={styles.popupOverlay}>
                    <View style={styles.popup}>
                        <View style={styles.popupContent}>
                            <ScrollView contentContainerStyle={styles.modalInfo}>
                                <Text style={styles.message}>"You about to delete the update!"</Text>
                            </ScrollView>
                        </View>
                        <View style={styles.popupButtons}>
                            <View >
                                <TouchableOpacity onPress={() => deletePost(deletePostId)} style={styles.btnClose}>
                                    <Text style={styles.txtClose}>DELETE</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginLeft: 10 }}>
                                <TouchableOpacity onPress={() => setDeleteModalVisible(false)} style={styles.btnClose}>
                                    <Text style={styles.txtClose}>CANCEL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderTopWidth: 5,
        padding: 10,
    },
    pic: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 18,
        width: 170,
    },
    mblTxt: {
        fontWeight: '200',
        color: 'red',
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 0,
        backgroundColor: "white"
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        flex: 1,
    },
    /******** social bar ******************/
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        backgroundColor: "white"
    },
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25,
    },
    postButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
        height: 40,
        borderRadius: 20,
        margin: 5,
        zIndex: 100,
    },
    /************ modals ************/
    message: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    popup: {
        backgroundColor: 'white',
        marginTop: 250,
        marginHorizontal: 20,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 30
    },
    popupContent: {
        margin: 5,
        height: 30,
    },
    popupHeader: {
        marginBottom: 45
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent: 'center'
    },
    popupButton: {
        flex: 1,
        marginVertical: 16
    },
    btnClose: {
        height: 30,
        width: 100,
        padding: 5,
        backgroundColor: '#20b2aa',
        alignItems: 'center',
    },
    modalInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});   