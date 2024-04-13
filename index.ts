export function str(strValue) {
    let utils = {
        value: strValue,
        set(v) {
            this.value = v

            return utils
        },
        get() {
            return this.value
        }
    }

    return utils
}