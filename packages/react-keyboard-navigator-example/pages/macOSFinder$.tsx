/**
 * @title MacOS Finder
 * @order 2
 */

import React, { useState } from 'react'
import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'
import 'https://kit.fontawesome.com/921bd8fdbd.js'
import './macOSFinder.scss'
import { Badge } from '../components/badge'

 const InterestGallery = () => {
    const [activeElementId, setActiveElementId] = useState<string | undefined>()

    const handleActive = (event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => setActiveElementId(event.currentTarget.dataset['refId'])

    const { markRef: folderMarkRef } = useKeyboardNavigator({
        eventCallback: ((evt, { toElement }) => {
            evt.preventDefault()
            setActiveElementId(toElement.dataset['refId'])
            toElement.focus()
        })
    })

    const [focusElementId, setFocusedElementId] = useState<string | undefined>()

    const handleFocus = (event: React.FocusEvent<HTMLElement>) => setFocusedElementId(event.currentTarget.dataset['refId'])

    const { markRef: fileMarkRef } = useKeyboardNavigator({
        eventCallback: ((_, { toElement }) => {
            setFocusedElementId(toElement.dataset['refId'])
            toElement.focus()
        })
    })

    return (
        <>
            <main className="macOSFinder">
                <div id="window">
                    <div id="menubar">
                    <div id="stoplight">
                        <div className="circle" id="red"><i className="fas fa-times"></i></div>
                        <div className="circle" id="yellow"><i className="fas fa-minus"></i></div>
                        <div className="circle" id="green"><i className="fas fa-expand-arrows-alt"></i></div>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <i className="fas fa-file fa-fw" style={{ color: 'rgb(80, 200, 249)', marginRight: 10 }}></i> Documents
                    </div>
                    </div>
                    <div id="sidebar">
                        <KeyboardNavigatorBoard as="ul" markRef={folderMarkRef} autoActive>
                            <li className="header">Favorites</li>
                            <KeyboardNavigatorElement as="li" markRef={folderMarkRef} data-ref-id="bb" active={activeElementId === 'bb'} onClick={handleActive} onFocus={handleActive} tabIndex={0}><i className="fas fa-home fa-fw"></i><span>calebdenio</span></KeyboardNavigatorElement>
                            <KeyboardNavigatorElement as="li" markRef={folderMarkRef} data-ref-id="bc" active={activeElementId === 'bc'} onClick={handleActive} onFocus={handleActive} tabIndex={0}><i className="far fa-window-maximize fa-fw"></i><span>Desktop</span></KeyboardNavigatorElement>
                            <KeyboardNavigatorElement as="li" markRef={folderMarkRef} data-ref-id="bd" active={activeElementId === 'bd'} onClick={handleActive} onFocus={handleActive} tabIndex={0}><i className="fas fa-file fa-fw"></i><span>Documents</span></KeyboardNavigatorElement>
                            <KeyboardNavigatorElement as="li" markRef={folderMarkRef} data-ref-id="be" active={activeElementId === 'be'} onClick={handleActive} onFocus={handleActive} tabIndex={0}><i className="fas fa-download fa-fw"></i><span>Downloads</span></KeyboardNavigatorElement>
                            <li className="header">Devices</li>
                            <KeyboardNavigatorElement as="li" markRef={folderMarkRef} data-ref-id="bg" active={activeElementId === 'bg'} onClick={handleActive} onFocus={handleActive} tabIndex={0}><i className="fas fa-sd-card fa-fw"></i><span>Camera</span><i className="fas fa-eject"></i></KeyboardNavigatorElement>
                            <KeyboardNavigatorElement as="li" markRef={folderMarkRef} data-ref-id="bh" active={activeElementId === 'bh'} onClick={handleActive} onFocus={handleActive} tabIndex={0}><span><i className="far fa-hdd fa-fw"></i>Code Backup</span><i className="fas fa-eject"></i></KeyboardNavigatorElement>
                            <KeyboardNavigatorElement as="li" markRef={folderMarkRef} data-ref-id="bi" active={activeElementId === 'bi'} onClick={handleActive} onFocus={handleActive} tabIndex={0} title="AVENGERS: ENDGAME"><span><i className="fas fa-compact-disc fa-fw"></i>AVENGERS: ENDGAME</span><i className="fas fa-eject"></i></KeyboardNavigatorElement>
                        </KeyboardNavigatorBoard>
                    </div>
                    <div style={{ overflow: 'auto', height: 'calc(100% - 54px)' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th className="th-long">Name<i className="fas fa-caret-down" style={{ float: 'right', color: '#828282' }}></i></th>
                                    <th className="th-short">Date Created</th>
                                    <th className="th-short">Kind</th>
                                </tr>
                            </thead>
                            <KeyboardNavigatorBoard as="tbody" markRef={fileMarkRef} autoActive>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="aa" active={focusElementId === 'aa'} onFocus={handleFocus} tabIndex={0}>
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://i.stack.imgur.com/yHhOP.png" />New Folder</td>
                                    <td>Testing</td>
                                    <td>Folder</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="ab" active={focusElementId === 'ab'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://figure53.com/assets/app_icons/qlab_4/qlab_4-big.png" />QLab</td>
                                    <td>Blah</td>
                                    <td>Application</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="ac" active={focusElementId === 'ac'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://s3.amazonaws.com/fxhome-static/images/support/products/hitfilm-express-2017.png" />HitFilm Express</td>
                                    <td>Blah</td>
                                    <td>Application</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="ad" active={focusElementId === 'ad'} onFocus={handleFocus} tabIndex={0}>
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://i.stack.imgur.com/yHhOP.png" />Code stuff</td>
                                    <td>Moo Cow</td>
                                    <td>Folder</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="ae" active={focusElementId === 'ae'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://www.macosicongallery.com/icons/microsoft-word-2019-05-01/1024.png" />Resumé</td>
                                    <td>Blah</td>
                                    <td>Document</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="af" active={focusElementId === 'af'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://www.macosicongallery.com/icons/microsoft-word-2019-05-01/1024.png" />Resumé</td>
                                    <td>Blah</td>
                                    <td>Document</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="ag" active={focusElementId === 'ag'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://www.macosicongallery.com/icons/microsoft-word-2019-05-01/1024.png" />Resumé</td>
                                    <td>Blah</td>
                                    <td>Document</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="ah" active={focusElementId === 'ah'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://www.macosicongallery.com/icons/microsoft-word-2019-05-01/1024.png" />Resumé</td>
                                    <td>Blah</td>
                                    <td>Document</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="ai" active={focusElementId === 'ai'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://www.macosicongallery.com/icons/microsoft-word-2019-05-01/1024.png" />Resumé</td>
                                    <td>Blah</td>
                                    <td>Document</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="aj" active={focusElementId === 'aj'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://www.macosicongallery.com/icons/microsoft-word-2019-05-01/1024.png" />Resumé</td>
                                    <td>Blah</td>
                                    <td>Document</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="ak" active={focusElementId === 'ak'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://www.macosicongallery.com/icons/microsoft-word-2019-05-01/1024.png" />Resumé</td>
                                    <td>Blah</td>
                                    <td>Document</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="al" active={focusElementId === 'al'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://www.macosicongallery.com/icons/microsoft-word-2019-05-01/1024.png" />Resumé</td>
                                    <td>Blah</td>
                                    <td>Document</td>
                                </KeyboardNavigatorElement>
                                <KeyboardNavigatorElement as="tr" markRef={fileMarkRef} data-ref-id="am" active={focusElementId === 'am'} onFocus={handleFocus} tabIndex={0} className="notfolder">
                                    <td><i className="fas fa-caret-right icon"></i><img src="https://www.macosicongallery.com/icons/microsoft-word-2019-05-01/1024.png" />Resumé</td>
                                    <td>Blah</td>
                                    <td>Document</td>
                                </KeyboardNavigatorElement>
                            </KeyboardNavigatorBoard>
                        </table>
                    </div>
                    <div id="footer">
                        5 items, 998.46 GB available
                    </div>
                </div>
            </main>
            <Badge reference="https://codepen.io/cjdenio/pen/YzKeQBG" />
        </>
    )
 }

export default InterestGallery