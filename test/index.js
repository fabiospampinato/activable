
/* IMPORT */

import {describe} from 'ava-spec';
import Activable from '../dist';

/* ACTIVABLE */

describe ( 'Activable', it => {

  it.beforeEach ( t => {

    t.context.A = new Activable ();

  });

  describe ( 'constructor', it => {

    it ( 'Sets the active value to false by default', t => {

      t.false ( t.context.A.isActive () );

    });

    it ( 'Sets the provided active value', t => {

      const S1 = new Activable ( false );

      t.false ( S1.isActive () );

      const S2 = new Activable ( true );

      t.true ( S2.isActive () );

    });

  });

  describe ( 'activate', it => {

    it ( 'Sets the active value to true', t => {

      t.context.A.activate ();

      t.true ( t.context.A.isActive () );

    });

  });

  describe ( 'deactivate', it => {

    it ( 'Sets the active value to false', t => {

      t.context.A.activate ();
      t.context.A.deactivate ();

      t.false ( t.context.A.isActive () );

    });

  });

  describe ( 'toggle', it => {

    it ( 'Toggles the current active value', t => {

      t.context.A.toggleActive ();

      t.true ( t.context.A.isActive () );

      t.context.A.toggleActive ();

      t.false ( t.context.A.isActive () );

    });

    it ( 'Sets the provided active value', t => {

      t.context.A.toggleActive ( true );
      t.context.A.toggleActive ( true );

      t.true ( t.context.A.isActive () );

      t.context.A.toggleActive ( false );

      t.false ( t.context.A.isActive () );

    });

  });

  describe ( 'isActive', it => {

    it ( 'Gets the current active value', t => {

      t.false ( t.context.A.isActive () );

      t.context.A.activate ();

      t.true ( t.context.A.isActive () );

    });

  });

});
