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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
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

  /**
   * Report if bluetooth is enabled.
   *
   * @returns {Promise<void>} Returns a Promise that resolves if Bluetooth is enabled, and rejects if disabled.
   */
  @Cordova()
  isEnabled(): Promise<void> {
    return;
  }

  /**
   * Enable Bluetooth on the device (Android only).
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  enable(): Promise<any> {
    return;
  }

  /**
   * Tool link.
   * @usage
   * ```
   *   ScanTool.toolLink().then(() => {
   *     console.log('Tool Linked');
   *   });
   * ```
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  toolLink(): Promise<any> {
    return;
  }

  /**
   * Get VIN
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getVIN(): Promise<string> {
    return;
  }

  /**
   * Enable JSON Support
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  enableJSONSupport(): Promise<any> {
    return;
  }

  /**
   * Disable JSON Support
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  disableJSONSupport(): Promise<any> {
    return;
  }

  /**
   * Get Mileage
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getMileage(): Promise<number> {
    return;
  }

  /**
   * Get VIN Profile
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getVinProfile(): Promise<string> {
    return;
  }

  /**
   * Get Battery Status
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getBatteryStatus(): Promise<number> {
    return;
  }

  /**
   * Get Battery Voltage
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getBatteryVoltage(): Promise<number> {
    return;
  }

  /**
   * Get Monitor Status
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getMonitorStatus(): Promise<string> {
    return;
  }

  /**
   * Get Freeze Frame
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getFreezeFrame(): Promise<string> {
    return;
  }

  /**
   * Get ECM DTCs
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getECMDTCs(): Promise<string> {
    return;
  }

  /**
   * Get TCM DTCs
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getTCMDTCs(): Promise<string> {
    return;
  }

  /**
   * Get OEM Module Supported
   *
   * @return {Promise<any[]>} Returns a Promise
   */
  @Cordova()
  getOEMModuleSupported(): Promise<any[]> {
    return;
  }

  /**
   * Get OEM Module DTCs
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getOEMModuleDTCs(): Promise<any> {
    return;
  }

  /**
   * Get Tool Setting
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  getToolSetting(): Promise<any> {
    return;
  }

  /**
   * Get Device Id
   *
   * @return {Promise<string>} Returns a Promise
   */
  @Cordova()
  getDeviceId(): Promise<string> {
    return;
  }

  /**
   * Get Product Id
   *
   * @return {Promise<number>} Returns a Promise
   */
  @Cordova()
  getProductId(): Promise<number> {
    return;
  }

  /**
   * Set VIN
   *
   * @return {Promise<any>} Returns a Promise
   */
  @Cordova()
  setVIN(vin: string): Promise<any> {
    return;
  }
}
