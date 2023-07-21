/* eslint-disable no-console */
import test from 'ava'

import { check } from '../index'

test('check true', (t) => {
    const pkgName = check("3w5rhq3e4ha3ew45hbgze345rhygas3zwe4r5")
    t.is(pkgName, true)
})