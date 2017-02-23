declare class Activable {
    _isActive: boolean;
    constructor(active?: boolean);
    isActive(): boolean;
    activate(): this;
    deactivate(): this;
    toggleActive(active?: boolean): this;
}
export default Activable;
