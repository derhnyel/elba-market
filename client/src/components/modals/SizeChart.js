import React from 'react'

const SizeChart = () => {
    return (

        <div className="modal fade" id="modalSizeChart" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">

                    {/* <!-- Close --> */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true"></i>
                    </button>

                    {/* <!-- Header--> */}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Size Chart</strong>
                    </div>

                    {/* <!-- Body --> */}
                    <div className="modal-body border-bottom">

                        {/* <!-- Header --> */}
                        <div className="d-flex mb-7">

                            {/* <!-- Heading --> */}
                            <h5 className="mb-0">Clothing</h5>

                            {/* <!-- Toggles --> */}
                            <div className="btn-group btn-group-toggle ml-auto" data-toggle="buttons">
                                <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                                    <input type="radio" name="modalSizeChartUnitOne" checked /> IN
              </label>
                                <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                                    <input type="radio" name="modalSizeChartUnitOne" /> CM
              </label>
                            </div>

                        </div>

                        {/* <!-- Table --> */}
                        <div className="table-responsive">
                            <table className="table table-bordered table-sm table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Size</th>
                                        <th>US</th>
                                        <th>Bust</th>
                                        <th>Waist</th>
                                        <th>Hips</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>XS</td>
                                        <td>2</td>
                                        <td>32</td>
                                        <td>24 - 25</td>
                                        <td>33 - 34</td>
                                    </tr>
                                    <tr>
                                        <td>S</td>
                                        <td>4</td>
                                        <td>34 - 35</td>
                                        <td>26 - 27</td>
                                        <td>35 - 26</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>6</td>
                                        <td>36 - 37</td>
                                        <td>28 - 29</td>
                                        <td>38 - 40</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>8</td>
                                        <td>38 - 29</td>
                                        <td>30 - 31</td>
                                        <td>42 - 44</td>
                                    </tr>
                                    <tr>
                                        <td>XL</td>
                                        <td>10</td>
                                        <td>40 - 41</td>
                                        <td>32 - 33</td>
                                        <td>45 - 47</td>
                                    </tr>
                                    <tr>
                                        <td>XXL</td>
                                        <td>12</td>
                                        <td>42 - 43</td>
                                        <td>34 - 35</td>
                                        <td>48 - 50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/* <!-- Body --> */}
                    <div className="modal-body">

                        {/* <!-- Header --> */}
                        <div className="d-flex mb-7">

                            {/* <!-- Heading --> */}
                            <h5 className="mb-0">Shoes</h5>

                            {/* <!-- Toggles --> */}
                            <div className="btn-group btn-group-toggle ml-auto" data-toggle="buttons">
                                <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                                    <input type="radio" name="modalSizeCharUnitTwo" checked /> IN
              </label>
                                <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                                    <input type="radio" name="modalSizeCharUnitTwo" /> CM
              </label>
                            </div>

                        </div>

                        {/* <!-- Tables --> */}
                        <div className="row">
                            <div className="col-12 col-lg-6">

                                {/* <!-- Table --> */}
                                <div className="table-responsive">
                                    <table className="table table-bordered table-sm table-hover mb-lg-0">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>US</th>
                                                <th>Foot Length</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>36</td>
                                                <td>5</td>
                                                <td>22.8</td>
                                            </tr>
                                            <tr>
                                                <td>26.5</td>
                                                <td>5.5</td>
                                                <td>23.1</td>
                                            </tr>
                                            <tr>
                                                <td>37</td>
                                                <td>6</td>
                                                <td>23.5</td>
                                            </tr>
                                            <tr>
                                                <td>37.5</td>
                                                <td>6.</td>
                                                <td>23.5</td>
                                            </tr>
                                            <tr>
                                                <td>38</td>
                                                <td>7</td>
                                                <td>24.1</td>
                                            </tr>
                                            <tr>
                                                <td>38.5</td>
                                                <td>7.5</td>
                                                <td>24.5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="col-12 col-lg-6">

                                {/* <!-- Table --> */}
                                <div className="table-responsive">
                                    <table className="table table-bordered table-sm table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>US</th>
                                                <th>Foot Length</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>36</td>
                                                <td>5</td>
                                                <td>22.8</td>
                                            </tr>
                                            <tr>
                                                <td>39</td>
                                                <td>8</td>
                                                <td>24.1</td>
                                            </tr>
                                            <tr>
                                                <td>40</td>
                                                <td>9</td>
                                                <td>25.4</td>
                                            </tr>
                                            <tr>
                                                <td>40.5</td>
                                                <td>9.5</td>
                                                <td>25.7</td>
                                            </tr>
                                            <tr>
                                                <td>41</td>
                                                <td>10</td>
                                                <td>26.0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SizeChart