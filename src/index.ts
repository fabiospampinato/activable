
/* ACTIVABLE */

class Activable {

  /* PROPERTIES */

  _isActive: boolean;

  /* CONSTRUCTOR */

  constructor ( active?: boolean ) {

    this.toggleActive ( !!active );

  }

  /* API */

  isActive (): boolean {

    return this._isActive;

  }

  activate (): this {

    return this.toggleActive ( true );

  }

  deactivate (): this {

    return this.toggleActive ( false );

  }

  toggleActive ( active: boolean = !this._isActive ): this {

    this._isActive = !!active;

    return this;

  }

}

/* EXPORT */

export default Activable;
