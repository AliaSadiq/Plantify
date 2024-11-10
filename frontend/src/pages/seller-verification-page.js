import useFetch from '../hooks/useFetch';
import SellerVerificationTable from '../components/tables/seller-verification-table';

export default function SellerVerificationPage () {
    const url = "http://localhost:5000/api/sellers/on-wait";
    const { data: sellers, loading, error }= useFetch(url);

    return(
        <div className='min-h-screen lg:ml-[245px] p-4'> 
            <div className='min-h-screen p-8 rounded-pl bg-neutral'>
                <h1 className='mb-6 text-lg font-semibold'>Sellers to be Verified</h1>
                <SellerVerificationTable sellers={sellers}/>
            </div>
        </div>
    );
}