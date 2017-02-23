/* ACTIVABLE */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Activable = (function () {
    /* CONSTRUCTOR */
    function Activable(active) {
        this.toggleActive(!!active);
    }
    /* API */
    Activable.prototype.isActive = function () {
        return this._isActive;
    };
    Activable.prototype.activate = function () {
        return this.toggleActive(true);
    };
    Activable.prototype.deactivate = function () {
        return this.toggleActive(false);
    };
    Activable.prototype.toggleActive = function (active) {
        if (active === void 0) { active = !this._isActive; }
        this._isActive = !!active;
        return this;
    };
    return Activable;
}());
/* EXPORT */
exports.default = Activable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsZUFBZTs7O0FBRWY7SUFNRSxpQkFBaUI7SUFFakIsbUJBQWMsTUFBZ0I7UUFFNUIsSUFBSSxDQUFDLFlBQVksQ0FBRyxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUM7SUFFakMsQ0FBQztJQUVELFNBQVM7SUFFVCw0QkFBUSxHQUFSO1FBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFFeEIsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFFRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBRyxJQUFJLENBQUUsQ0FBQztJQUVwQyxDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFHLEtBQUssQ0FBRSxDQUFDO0lBRXJDLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWUsTUFBaUM7UUFBakMsdUJBQUEsRUFBQSxVQUFtQixJQUFJLENBQUMsU0FBUztRQUU5QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUVkLENBQUM7SUFFSCxnQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUFFRCxZQUFZO0FBRVosa0JBQWUsU0FBUyxDQUFDIn0=