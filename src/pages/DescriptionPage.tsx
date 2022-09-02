import classes from './DescriptionPage.module.css'

export const DescriptionPage = () => {
    const { text, cont, image } = classes;

    return (
        <div className={cont}>
            <div className={text}>
                <div className={image}></div>
                Online - store  is an overseas shopping service. We help to place orders directly in stores in the USA,
                Europe and Asia! Our main advantages are low commission, fast delivery and quality service when making orders.
                Also, we provide services for the purchase, delivery and customs clearance of parcels from abroad to Ukraine.
                Our service allows you not only to save on goods that are much cheaper abroad, but also to bypass all the obstacles
                that the average user faces when working with foreign stores. Register on the Unitrade Express website and get a lot
                of benefits! We wish you happy shopping!

            </div>
        </div>
    )
}