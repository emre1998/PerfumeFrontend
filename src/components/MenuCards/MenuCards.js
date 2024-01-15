import React from "react";

import usePagination from "../Pagination/usePagination";
import PaginationItem from "../Pagination/PaginationItem";
import SearchForm from "../../components/SearchForm/SearchForm";
import PerfumeCardItemn from "../../components/PerfumeCardItem/PerfumeCardItem";

const MenuCards = ({data,itemPerPage,startFrom,searchByData}) => {
    const {slicedData,pagination,prevPage,nextPage,changePage,setFilteredData,setSearching} = usePagination({itemPerPage,data,startFrom});

    return (
        <div className="container">
            <div className="container-fluid row mt-5 ml-2">
                <SearchForm 
                data = {data} 
                searchByData={searchByData}
                 setFilteredData={setFilteredData}
                  setSearching={setSearching}/>
            </div>
            <div className="row mt-3 ml-2">
                <div className="container-fluid">
                    <PaginationItem
                     pagination={pagination} 
                    prevPage={prevPage}
                     changePage={changePage} 
                     nextPage={nextPage} /> 
                     <div className="row">
                        {slicedData.map((perfume)=> {
                            return (
                                <PerfumeCardItemn 
                                perfume={perfume}
                                colSize={3}
                                link ={"/product"}
                                btnName = {"SHOW MORE"}/>
                            );
                        })}
                     </div>
                     <PaginationItem
                     pagination={pagination}
                     prevPage={prevPage}
                     changePage={changePage}
                     nextPage={nextPage}/>
                </div>
            </div>
        </div>
    );
}
export default MenuCards;