/* eslint-disable no-console */
import test from 'ava'

import { check } from '../index'

test('check false', (t) => {
    const pkgName = check("express")
    t.is(pkgName, false)
})