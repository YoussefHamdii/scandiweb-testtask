import {Checkout} from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from 'SourceComponent/ContentWrapper';
import ProgressBar from "Component/ProgressBar/ProgressBar.component";
import {
    BILLING_STEP,
    CHECKOUT_URL,
    DETAILS_STEP,
    SHIPPING_STEP
} from 'SourceRoute/Checkout/Checkout.config';

class CheckOutComponent extends Checkout {
    render(){
        return (
            <main block="Checkout">
                <ProgressBar steps={[SHIPPING_STEP,BILLING_STEP, DETAILS_STEP, CHECKOUT_URL]} status={this.props.checkoutStep}/>
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckOutComponent;