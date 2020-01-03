/******************************************************************
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import { MobxComponent } from '@minapp/mobx'
import { MyApp } from './MyApp'
import { MyStore } from './MyStore'

export class MyComponent<D = any> extends MobxComponent<D, MyStore, MyApp> {}
