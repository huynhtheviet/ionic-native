/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Scan Tool
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { ScanTool } from '@ionic-native/scan-tool';
 *
 *
 * constructor(private scanTool: ScanTool) { }
 *
 * ...
 *
 *
 * this.scanTool.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'ScanTool',
  plugin: 'scan-tool-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'scantool', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github/huynhtheviet/scan-tool-plugin.git', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class ScanTool extends IonicNativePlugin {

  /**
   * Scan and discover BLE peripherals until `stopScan` is called.
   *
   * @usage
   * ```
   * ScanTool.startScan().subscribe(device => {
   *   console.log(JSON.stringify(device));
   * });
   *
   * setTimeout(() => {
   *   ScanTool.stopScan();
   * }, 5000);
   * ```
   * @returns {Observable<any>} Returns an Observable that notifies of each peripheral discovered.
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopScan',
    clearWithArgs: false
  })
  startScan(): Observable<any> {
    return;
  }

  /**
   * Stop a scan started by `startScan`.
   *
   * @usage
   * ```
   * ScanTool.startScan().subscribe(device => {
   *   console.log(JSON.stringify(device));
   * });
   * setTimeout(() => {
   *   ScanTool.stopScan().then(() => { console.log('scan stopped'); });
   * }, 5000);
   * ```
   * @returns {Promise<any>}
   */
  @Cordova()
  stopScan(): Promise<any> {
    return;
  }

  /**
   * Connect to a peripheral.
   * @usage
   * ```
   *   ScanTool.connect('12:34:56:78:9A:BC').subscribe(peripheralData => {
   *     console.log(peripheralData);
   *   },
   *   peripheralData => {
   *     console.log('disconnected');
   *   });
   * ```
   * @param {string} deviceId UUID or MAC address of the peripheral
   * @return {Observable<any>} Returns an Observable that notifies of connect/disconnect.
   */
  @Cordova({
    observable: true,
    clearFunction: 'disconnect',
    clearWithArgs: true
  })
  connect(deviceId: string): Observable<any> {
    return;
  }

  /**
   * Disconnect from a peripheral.
   * @usage
   * ```
   *   ScanTool.disconnect('12:34:56:78:9A:BC').then(() => {
   *     console.log('Disconnected');
   *   });
   * ```
   * @param {string} deviceId  UUID or MAC address of the peripheral
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  disconnect(deviceId: string): Promise<any> {
    return;
  }

  /**
   * Tool link.
   * @usage
   * ```
   *   ScanTool.toolLink('12:34:56:78:9A:BC').then(() => {
   *     console.log('Disconnected');
   *   });
   * ```
   * @param {string} deviceId  UUID or MAC address of the peripheral
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  toolLink(deviceId: string): Promise<any> {
    return;
  }

  /**
   * Read the vehicle data.
   *
   * @param {string} deviceId  UUID or MAC address of the peripheral
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  readVehicleData(
    deviceId: string
  ): Promise<any> {
    return;
  }

  /**
   * Report the connection status.
   *
   * @usage
   * ```
   * ScanTool.isConnected('FFCA0B09-CB1D-4DC0-A1EF-31AFD3EDFB53').then(
   *   () => { console.log('connected'); },
   *   () => { console.log('not connected'); }
   * );
   * ```
   * @param {string} deviceId  UUID or MAC address of the peripheral
   * @returns {Promise<any>}
   */
  @Cordova()
  isConnected(deviceId: string): Promise<any> {
    return;
  }
}
