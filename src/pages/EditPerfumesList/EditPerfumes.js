import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";

import usePagination from "../../components/Pagination/usePagination";
import AccountNavbar from "../../components/AccountNavbar/AccountNavbar";
import PaginationItem from "../../components/Pagination/PaginationItem";
import SearchForm from "../../components/SearchForm/SearchForm";
import PerfumeCardItem from "../../components/PerfumeCardItem/PerfumeCardItem";

function EditPerfumes({data, itemsPerPage, startFrom, searchByData}) {
    const {slicedData, pagination, prevPage, nextPage, changePage, setFilteredData, setSearching} = usePagination({
        itemsPerPage,
        data,
        startFrom
    });

    return (
        <div>
            <AccountNavbar/>
            <div className="container mt-5">
                <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faList}/> List of perfumes</h4>
                <br/>
                <div className="container form row">
                    <PaginationItem
                        pagination={pagination}
                        prevPage={prevPage}
                        changePage={changePage}
                        nextPage={nextPage}/>
                    <div className="ml-5">
                        <SearchForm
                            data={data}
                            searchByData={searchByData}
                            setFilteredData={setFilteredData}
                            setSearching={setSearching}/>
                    </div>
                </div>
                <div className="container-fluid mt-3">
                    <div className="row">
                        {slicedData.map((perfume) => {
                            return (
                                <PerfumeCardItem
                                    perfume={perfume}
                                    colSize={2}
                                    link={"/product/list/edit"}
                                    btnName={"Edit"}/>
                            );
                        })}
                    </div>
                </div>
                <PaginationItem
                    pagination={pagination}
                    prevPage={prevPage}
                    changePage={changePage}
                    nextPage={nextPage}/>
            </div>
        </div>
    );
}

export default EditPerfumes;